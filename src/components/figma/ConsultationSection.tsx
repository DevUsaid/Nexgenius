'use client';

import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ConsultationSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['AI & automation']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    brief: '',
    agreed: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'AI & automation',
    'Web / software',
    'Mobile apps',
    'Cloud & support',
    'SEO',
    'Not sure yet',
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#14532D] text-white py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Consultation Invitation */}
          <div className="lg:col-span-6 flex flex-col items-start max-w-[540px]">
            <div className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-[#A7F3D0] mb-5">
              08 / LET’S BUILD WHAT’S NEXT
            </div>

            <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] font-medium text-white tracking-tight leading-[1.12] mb-6">
              Bring the challenge.<br />
              We’ll bring the<br />
              right team.
            </h2>

            <p className="text-[16px] sm:text-[18px] text-[#D1FAE5] leading-[1.6] mb-8">
              An idea, an operational bottleneck or a platform ready for its next chapter. Tell us where you want to go.
            </p>

            {/* Consultation Expectations */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="text-[14px] sm:text-[15px] text-white">
                  A focused conversation about your goals
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="text-[14px] sm:text-[15px] text-white">
                  Practical guidance on scope and next steps
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="text-[14px] sm:text-[15px] text-white">
                  A proposal shaped around your business
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[12px] p-6 sm:p-9 text-[#111827] shadow-2xl">
              <h3 className="text-[22px] sm:text-[25px] font-medium text-[#111D33] mb-6">
                Tell us about your project
              </h3>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#14532D] mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h4 className="text-[20px] font-medium text-[#111D33]">
                    Thank you! We received your brief.
                  </h4>
                  <p className="text-[14px] text-[#617087] max-w-sm mx-auto">
                    Our engineering leads will review your requirements and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium text-[#111D33] mb-1.5">
                        Your name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-[6px] bg-[#FAFBFD] border border-[#DCE3EE] text-[13px] text-[#111827] focus:outline-none focus:border-[#14532D] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-[#111D33] mb-1.5">
                        Work email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-[6px] bg-[#FAFBFD] border border-[#DCE3EE] text-[13px] text-[#111827] focus:outline-none focus:border-[#14532D] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label className="block text-[12px] font-medium text-[#111D33] mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your organisation"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-[6px] bg-[#FAFBFD] border border-[#DCE3EE] text-[13px] text-[#111827] focus:outline-none focus:border-[#14532D] transition-colors"
                    />
                  </div>

                  {/* Service Multi-selection */}
                  <div>
                    <label className="block text-[12px] font-medium text-[#111D33] mb-2">
                      What can we help you with?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`px-3 py-1.5 rounded-[6px] text-[12px] transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#EAF0FF] border border-[#1746D1] text-[#1746D1] font-medium'
                                : 'bg-white border border-[#DCE3EE] text-[#617087] hover:border-gray-400'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Brief Field */}
                  <div>
                    <label className="block text-[12px] font-medium text-[#111D33] mb-1.5">
                      Project brief *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Your goals, current challenges and anything we should know…"
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      className="w-full p-3 rounded-[6px] bg-[#FAFBFD] border border-[#DCE3EE] text-[13px] text-[#111827] focus:outline-none focus:border-[#14532D] transition-colors resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="mt-0.5 rounded border-[#DCE3EE] text-[#14532D] focus:ring-[#14532D] cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-[11px] text-[#617087] leading-relaxed cursor-pointer">
                      I agree to be contacted about my enquiry and have read the privacy notice.
                    </label>
                  </div>

                  {/* Submit Row */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 h-[48px] px-6 rounded-[6px] bg-[#14532D] hover:bg-[#0f3d21] text-white text-[14px] font-semibold transition-all shadow-sm cursor-pointer"
                    >
                      <span>Request a consultation</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <span className="text-[11px] text-[#617087]">
                      No obligation. Just clarity.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
