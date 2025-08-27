import React, { useState } from "react";
import { User, Mail, MapPin, BadgeInfo, Building2, CheckCircle2, AlertCircle } from "lucide-react";

const GovRegister = () => {
  const [form, setForm] = useState({
    name: "",
    govmail: "",
    district: "",
    state: "",
    designation: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.govmail.trim()) {
      newErrors.govmail = "Gov mail is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.govmail)) {
      newErrors.govmail = "Enter a valid email address";
    }
    if (!form.district.trim()) newErrors.district = "District is required";
    if (!form.state.trim()) newErrors.state = "State is required";
    if (!form.designation.trim()) newErrors.designation = "Designation is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 1500));
      setSubmitSuccess(true);
      setTimeout(() => {
        setForm({
          name: "",
          govmail: "",
          district: "",
          state: "",
          designation: "",
        });
        setSubmitSuccess(false);
      }, 2500);
    } catch {
      setErrors({ submit: "Registration failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h2>
          <p className="text-gray-600 mb-4">Welcome! Your details have been submitted.</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-2 py-8">
      <div className="bg-white shadow-2xl rounded-xl p-6 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="mx-auto w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <BadgeInfo className="w-7 h-7 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Gov Official Registration</h1>
          <p className="text-sm text-gray-600">Register as a government official</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`w-full pl-10 pr-3 py-3 text-base border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                  errors.name ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name}
              </p>
            )}
          </div>
          {/* Gov Mail */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Gov Mail *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="govmail"
                value={form.govmail}
                onChange={handleChange}
                placeholder="official@gov.in"
                className={`w-full pl-10 pr-3 py-3 text-base border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                  errors.govmail ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"
                }`}
              />
            </div>
            {errors.govmail && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.govmail}
              </p>
            )}
          </div>
          {/* District */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">District *</label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="district"
                value={form.district}
                onChange={handleChange}
                placeholder="District"
                className={`w-full pl-10 pr-3 py-3 text-base border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                  errors.district ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"
                }`}
              />
            </div>
            {errors.district && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.district}
              </p>
            )}
          </div>
          {/* State */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                className={`w-full pl-10 pr-3 py-3 text-base border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                  errors.state ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"
                }`}
              />
            </div>
            {errors.state && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.state}
              </p>
            )}
          </div>
          {/* Designation */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Designation *</label>
            <div className="relative">
              <BadgeInfo className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="designation"
                value={form.designation}
                onChange={handleChange}
                placeholder="e.g. District Magistrate"
                className={`w-full pl-10 pr-3 py-3 text-base border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                  errors.designation ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"
                }`}
              />
            </div>
            {errors.designation && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.designation}
              </p>
            )}
          </div>
          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all transform ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Registering...
                </div>
              ) : (
                "Register"
              )}
            </button>
            {errors.submit && (
              <p className="text-red-500 text-center mt-4 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.submit}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default GovRegister;