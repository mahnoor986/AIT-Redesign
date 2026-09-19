"use client";

import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronLeft, ChevronRight, GraduationCap, Loader2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type FormData = {
  full_name: string;
  father_guardian_name: string;
  date_of_birth: string;
  gender: string;
  cnic: string;
  phone: string;
  email: string;
  whatsapp_number: string;
  full_address: string;
  relationship_to_student: string;
  guardian_contact: string;
  last_qualification: string;
  study_work_status: string;
  study_work_details: string;
  signature: string;
  studied_at_idara: boolean;
  studying_at_idara: boolean;
  is_terms_agreed: boolean;
  course: string;
};

const initialData: FormData = {
  full_name: "",
  father_guardian_name: "",
  date_of_birth: "",
  gender: "",
  cnic: "",
  phone: "",
  email: "",
  whatsapp_number: "",
  full_address: "",
  relationship_to_student: "",
  guardian_contact: "",
  last_qualification: "",
  study_work_status: "",
  study_work_details: "",
  signature: "",
  studied_at_idara: false,
  studying_at_idara: false,
  is_terms_agreed: false,
  course: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 dark:border-white/20 dark:bg-black/40 dark:text-white";

function Field({
  label,
  name,
  required = false,
  error,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default function RegisterPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [specializations, setSpecializations] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [sessions, setSessions] = useState<any[]>([]);
  const [branches, setBranches] = useState<any[]>([]);
  const [specialization, setSpecialization] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [branchId, setBranchId] = useState("");
  const [testRequired, setTestRequired] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<{ leadCode?: string; test: boolean } | null>(null);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    Promise.all([
      fetch("/proxy/get?url=/api/courses/specialization/all").then((r) => r.json()),
      fetch("/proxy/get?url=/api/courses/courses/").then((r) => r.json()),
      fetch("/proxy/get?url=/api/courses/branches/").then((r) => r.json()),
    ])
      .then(([specs, courseData, branchData]) => {
        const normalize = (value: any) => (Array.isArray(value) ? value : value?.results || value?.data || []);
        setSpecializations(
          normalize(specs).filter((item: any) => item.active !== false && item.name !== "General IQ Test")
        );
        setCourses(normalize(courseData));
        setBranches(normalize(branchData));
        const params = new URLSearchParams(window.location.search);
        const specializationId = params.get("specialization_id") || "";
        const courseId = params.get("course_id") || "";
        const requestedBranchId = params.get("branch_id") || "";
        if (specializationId) setSpecialization(specializationId);
        if (courseId) setData((prev) => ({ ...prev, course: courseId }));
        if (requestedBranchId) setBranchId(requestedBranchId);
      })
      .catch(() => setServerError("Courses could not be loaded. Please refresh the page."));
  }, []);

  useEffect(() => {
    if (!data.course) {
      setSessions([]);
      setSessionId("");
      return;
    }
    fetch(`/proxy/get?url=/api/courses/courses/${data.course}/sessions/`)
      .then((r) => r.json())
      .then((value) => setSessions(Array.isArray(value) ? value : value?.data || []))
      .catch(() => setSessions([]));
    fetch("/api/admission/check-requirement/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ course_id: data.course }),
    })
      .then((r) => r.json())
      .then((value) => setTestRequired(value.test_required !== false));
  }, [data.course]);

  const filteredCourses = useMemo(() => {
    return courses.filter((course: any) => {
      const spec = typeof course.specialization === "object" ? course.specialization?.id : course.specialization;
      return String(spec) === String(specialization) && String(course.admission_status || "").toLowerCase() === "open";
    });
  }, [courses, specialization]);

  const availableSessions = useMemo(() => {
    return sessions.filter((item: any) => {
      const today = new Date().toLocaleDateString("en-CA");
      return (
        item.active !== false &&
        Number(item.seats_available || 0) > 0 &&
        (!item.admission_open_date || today >= item.admission_open_date) &&
        (!item.course_start_date || today < item.course_start_date)
      );
    });
  }, [sessions]);

  const update = (name: keyof FormData, value: string | boolean) => {
    if (["phone", "cnic", "whatsapp_number", "guardian_contact"].includes(name)) {
      value = String(value).replace(/\D/g, "");
    }
    if (name === "email") value = String(value).toLowerCase();
    setData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "study_work_status" && value === "none" ? { study_work_details: "" } : {}),
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validatePersonal = () => {
    const next: Record<string, string> = {};
    const namePattern = /^[A-Za-z][A-Za-z .'-]{1,253}$/;
    if (!namePattern.test(data.full_name.trim())) next.full_name = "Enter a valid full name using letters only.";
    if (!namePattern.test(data.father_guardian_name.trim()))
      next.father_guardian_name = "Enter a valid father/guardian name.";
    if (!data.date_of_birth) next.date_of_birth = "Date of birth is required.";
    else {
      const dob = new Date(data.date_of_birth);
      const now = new Date();
      const age =
        now.getFullYear() -
        dob.getFullYear() -
        (now < new Date(now.getFullYear(), dob.getMonth(), dob.getDate()) ? 1 : 0);
      if (age < 5 || age > 100) next.date_of_birth = "Enter a valid date of birth (age 5–100).";
    }
    if (!data.gender) next.gender = "Gender is required.";
    if (!/^\d{13}$/.test(data.cnic)) next.cnic = "CNIC/B-Form must contain exactly 13 digits.";
    if (!/^03\d{9}$/.test(data.phone)) next.phone = "Use Pakistani mobile format 03XXXXXXXXX.";
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(data.email)) next.email = "Enter a valid email address.";
    if (!/^03\d{9}$/.test(data.whatsapp_number)) next.whatsapp_number = "Use Pakistani mobile format 03XXXXXXXXX.";
    if (data.full_address.trim().length < 10) next.full_address = "Enter a complete residential address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const validateEducation = () => {
    const next: Record<string, string> = {};
    if (!specialization) next.specialization = "Specialization is required.";
    if (!data.course) next.course = "Course is required.";
    if (!sessionId) next.session = "Session/class is required.";
    if (!data.last_qualification) next.last_qualification = "Last qualification is required.";
    if (!data.study_work_status) next.study_work_status = "Current study/work status is required.";
    if (["studying", "working", "both"].includes(data.study_work_status) && data.study_work_details.trim().length < 3)
      next.study_work_details = "Please provide current study/work details.";
    if (data.signature.trim().toLowerCase() !== data.full_name.trim().toLowerCase())
      next.signature = "Signature must match your full name.";
    if (!data.is_terms_agreed) next.is_terms_agreed = "You must accept the Terms & Conditions.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const continueToEducation = () => {
    if (validatePersonal()) {
      setStep(2);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (step === 1) {
      continueToEducation();
      return;
    }
    if (!validateEducation()) return;
    setSubmitting(true);
    setServerError("");
    const selectedSession = sessions.find((item: any) => item.id === sessionId);
    try {
      const response = await fetch("/api/admission/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.full_name.trim(),
          email: data.email,
          phone: data.phone,
          cnic_number: data.cnic,
          date_of_birth: data.date_of_birth,
          gender: data.gender,
          whatsapp_number: data.whatsapp_number,
          father_guardian_name: data.father_guardian_name.trim(),
          guardian_contact: data.guardian_contact || null,
          relationship_to_student: data.relationship_to_student || null,
          full_address: data.full_address.trim(),
          last_qualification: data.last_qualification,
          study_work_status: data.study_work_status,
          study_work_details: data.study_work_details.trim(),
          studied_at_idara: data.studied_at_idara,
          studying_at_idara: data.studying_at_idara,
          signature: data.signature.trim(),
          is_terms_agreed: data.is_terms_agreed,
          course_id: data.course,
          scheduled_class_id: sessionId,
          branch:
            selectedSession?.branch_code ||
            branches.find((item: any) => item.id === (selectedSession?.branch_id || branchId))?.code ||
            undefined,
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        const first = result.error || result.detail || Object.values(result)?.flat()?.[0];
        throw new Error(String(first || "Registration could not be submitted."));
      }
      if (result.test_required !== false) {
        window.location.href = `/register/entrance-test?lead_id=${result.lead_id}&test_id=${result.test_id}`;
      } else {
        setSuccess({ leadCode: result.lead_code, test: false });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error: any) {
      setServerError(error.message || "Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success)
    return (
      <>
        <Navbar />
        <main className="min-h-[70vh] bg-slate-50 px-4 py-24 dark:bg-black">
          <div className="mx-auto max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl dark:bg-slate-900">
            <CheckCircle2 className="mx-auto mb-5 h-16 w-16 text-teal-600" />
            <h1 className="text-3xl font-bold">Application submitted</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Your application is now waiting for admin review. After approval, your Student ID and temporary LMS password will be emailed to you.
            </p>
            {success.leadCode && (
              <p className="mt-5 rounded-xl bg-teal-50 p-3 font-mono font-bold text-teal-700">
                Reference: {success.leadCode}
              </p>
            )}
            <Link href="/" className="mt-7 inline-block rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white">
              Return home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-black">
        <section className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-xl md:p-10 dark:bg-slate-900">
          <div className="mb-8 text-center">
            <GraduationCap className="mx-auto mb-3 h-12 w-12 text-teal-600" />
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Register for a Course</h1>
            <p className="mt-2 text-slate-500">Complete both sections. Fields marked * are required.</p>
          </div>
          <div className="mb-9 grid grid-cols-2 gap-3">
            {[1, 2].map((value) => (
              <div
                key={value}
                className={`rounded-xl p-3 text-center text-sm font-bold ${
                  step === value ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {value}. {value === 1 ? "Personal Information" : "Education & Course"}
              </div>
            ))}
          </div>
          {serverError && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {serverError}
            </div>
          )}
          <form onSubmit={submit} noValidate>
            {Object.values(errors).some(Boolean) && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <p className="mb-2 font-semibold">Please correct the following fields:</p>
                <ul className="list-disc space-y-1 pl-5">
                  {Object.values(errors)
                    .filter(Boolean)
                    .map((msg, i) => (
                      <li key={i}>{msg}</li>
                    ))}
                </ul>
              </div>
            )}
            {step === 1 ? (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Full Name" name="full_name" required>
                  <input
                    id="full_name"
                    className={inputClass}
                    value={data.full_name}
                    onChange={(e) => update("full_name", e.target.value)}
                    placeholder="e.g. Ahmed Ali"
                  />
                </Field>
                <Field label="Father/Guardian Name" name="father_guardian_name" required>
                  <input
                    id="father_guardian_name"
                    className={inputClass}
                    value={data.father_guardian_name}
                    onChange={(e) => update("father_guardian_name", e.target.value)}
                  />
                </Field>
                <Field label="Date of Birth" name="date_of_birth" required>
                  <input
                    id="date_of_birth"
                    type="date"
                    max={new Date().toISOString().split("T")[0]}
                    className={inputClass}
                    value={data.date_of_birth}
                    onChange={(e) => update("date_of_birth", e.target.value)}
                  />
                </Field>
                <Field label="Gender" name="gender" required>
                  <select
                    id="gender"
                    className={inputClass}
                    value={data.gender}
                    onChange={(e) => update("gender", e.target.value)}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </Field>
                <Field label="CNIC / B-Form" name="cnic" required>
                  <input
                    id="cnic"
                    inputMode="numeric"
                    maxLength={13}
                    className={inputClass}
                    value={data.cnic}
                    onChange={(e) => update("cnic", e.target.value)}
                    placeholder="13 digits without dashes"
                  />
                </Field>
                <Field label="Phone Number" name="phone" required>
                  <input
                    id="phone"
                    inputMode="numeric"
                    maxLength={11}
                    className={inputClass}
                    value={data.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="03XXXXXXXXX"
                  />
                </Field>
                <Field label="Email Address" name="email" required>
                  <input
                    id="email"
                    type="email"
                    className={inputClass}
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </Field>
                <Field label="WhatsApp Number" name="whatsapp_number" required>
                  <input
                    id="whatsapp_number"
                    inputMode="numeric"
                    maxLength={11}
                    className={inputClass}
                    value={data.whatsapp_number}
                    onChange={(e) => update("whatsapp_number", e.target.value)}
                    placeholder="03XXXXXXXXX"
                  />
                </Field>
                <Field label="Guardian Relationship" name="relationship_to_student">
                  <input
                    id="relationship_to_student"
                    className={inputClass}
                    value={data.relationship_to_student}
                    onChange={(e) => update("relationship_to_student", e.target.value)}
                  />
                </Field>
                <Field label="Guardian Contact" name="guardian_contact">
                  <input
                    id="guardian_contact"
                    inputMode="numeric"
                    maxLength={11}
                    className={inputClass}
                    value={data.guardian_contact}
                    onChange={(e) => update("guardian_contact", e.target.value)}
                  />
                </Field>
                <div className="md:col-span-2">
                  <Field label="Full Residential Address" name="full_address" required>
                    <textarea
                      id="full_address"
                      rows={3}
                      className={inputClass}
                      value={data.full_address}
                      onChange={(e) => update("full_address", e.target.value)}
                    />
                  </Field>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Specialization" name="specialization" required>
                  <select
                    id="specialization"
                    className={inputClass}
                    value={specialization}
                    onChange={(e) => {
                      setSpecialization(e.target.value);
                      update("course", "");
                      setSessionId("");
                    }}
                  >
                    <option value="">Select specialization</option>
                    {specializations.map((x) => (
                      <option key={x.id} value={x.id}>
                        {x.name}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Course" name="course" required>
                  <select
                    id="course"
                    className={inputClass}
                    value={data.course}
                    onChange={(e) => update("course", e.target.value)}
                    disabled={!specialization}
                  >
                    <option value="">Select course</option>
                    {filteredCourses.map((x) => (
                      <option key={x.id} value={x.id}>
                        {x.name}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Session / Class" name="session" required>
                  <select
                    id="session"
                    className={inputClass}
                    value={sessionId}
                    onChange={(e) => {
                      setSessionId(e.target.value);
                      const x = sessions.find((s) => s.id === e.target.value);
                      setBranchId(x?.branch_id || "");
                    }}
                    disabled={!data.course}
                  >
                    <option value="">Select session</option>
                    {availableSessions.map((x) => (
                      <option key={x.id} value={x.id}>
                        {x.label || x.section_name || `Section ${x.section}`} | {x.branch_name} ({x.seats_available} seats)
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Last Qualification" name="last_qualification" required>
                  <select
                    id="last_qualification"
                    className={inputClass}
                    value={data.last_qualification}
                    onChange={(e) => update("last_qualification", e.target.value)}
                  >
                    <option value="">Select qualification</option>
                    <option value="matric">Matric / O-Level</option>
                    <option value="intermediate">Intermediate / A-Level</option>
                    <option value="bachelor">Bachelor&apos;s</option>
                    <option value="master">Master&apos;s</option>
                    <option value="other">Other</option>
                  </select>
                </Field>
                <Field label="Currently Studying/Working?" name="study_work_status" required>
                  <select
                    id="study_work_status"
                    className={inputClass}
                    value={data.study_work_status}
                    onChange={(e) => update("study_work_status", e.target.value)}
                  >
                    <option value="">Select status</option>
                    <option value="studying">Studying</option>
                    <option value="working">Working</option>
                    <option value="both">Both</option>
                    <option value="none">Neither</option>
                  </select>
                </Field>
                {data.study_work_status && data.study_work_status !== "none" && (
                  <Field label="Current Study/Work Details" name="study_work_details" required>
                    <textarea
                      id="study_work_details"
                      rows={3}
                      className={inputClass}
                      value={data.study_work_details}
                      onChange={(e) => update("study_work_details", e.target.value)}
                    />
                  </Field>
                )}
                <label className="flex items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={data.studied_at_idara}
                    onChange={(e) => update("studied_at_idara", e.target.checked)}
                  />
                  Previously studied at Idara Al-Khair
                </label>
                <label className="flex items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={data.studying_at_idara}
                    onChange={(e) => update("studying_at_idara", e.target.checked)}
                  />
                  Currently studying at Idara Al-Khair
                </label>
                <div className="md:col-span-2">
                  <Field label="Signature (type your full name)" name="signature" required>
                    <input
                      id="signature"
                      className={inputClass}
                      value={data.signature}
                      onChange={(e) => update("signature", e.target.value)}
                    />
                  </Field>
                </div>
                <div className="md:col-span-2">
                  <label className="flex items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={data.is_terms_agreed}
                      onChange={(e) => update("is_terms_agreed", e.target.checked)}
                    />
                    <span>
                      I agree to the{" "}
                      <Link href="/terms" className="font-semibold text-teal-600">
                        Terms & Conditions
                      </Link>
                      .
                    </span>
                  </label>
                  {errors.is_terms_agreed && <p className="mt-1 text-xs text-red-500">{errors.is_terms_agreed}</p>}
                </div>
                {!testRequired && data.course && (
                  <div className="md:col-span-2 rounded-xl bg-teal-50 p-4 text-sm text-teal-800">
                    No entrance test is required. After submission, an admin will review and approve your enrollment.
                  </div>
                )}
              </div>
            )}
            <div className="mt-9 flex justify-between">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setErrors({});
                  }}
                  className="flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold"
                >
                  <ChevronLeft />
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white disabled:opacity-60"
              >
                {submitting ? <Loader2 className="animate-spin" /> : step === 1 ? <ChevronRight /> : <CheckCircle2 />}
                {step === 1 ? "Continue" : "Submit Application"}
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}