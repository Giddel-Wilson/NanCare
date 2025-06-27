<script>
	let openFAQ = -1;

	function toggleFAQ(index) {
		openFAQ = openFAQ === index ? -1 : index;
	}

	const faqs = [
		{
			question: "What services does NanCare provide for elderly care?",
			answer: "NanCare offers comprehensive elderly support services including family counseling, wellness advocacy, resource coordination, community integration programs, education and training for caregivers, and advocacy for elderly rights. We focus on holistic support rather than medical care."
		},
		{
			question: "Do you provide direct medical care or nursing services?",
			answer: "No, NanCare is not a medical clinic or nursing agency. We are a welfare and support organization that helps families navigate elderly care options, connects them with appropriate medical resources, and provides emotional and practical support throughout the care journey."
		},
		{
			question: "What areas of Nigeria do you serve?",
			answer: "We currently serve multiple regions across Nigeria including Lagos State, FCT Abuja, Rivers State, Imo State, Anambra State, Ogun State, Oyo State, Kano State, and Kaduna State. We're continuously expanding our reach to serve more communities."
		},
		{
			question: "How much do your services cost?",
			answer: "Our service fees vary depending on the type and level of support needed. We offer flexible payment options and work with families to find solutions that fit their budget. Contact us for a personalized consultation and pricing information."
		},
		{
			question: "Can you help if we're not ready to make care decisions yet?",
			answer: "Absolutely! We provide educational resources, counseling, and guidance to help families understand their options and make informed decisions when they're ready. There's no pressure to commit to any specific services."
		},
		{
			question: "Do you work with other healthcare providers?",
			answer: "Yes, we collaborate with hospitals, clinics, NGOs, and government agencies to ensure comprehensive care coordination. We can help connect families with appropriate medical professionals and specialists when needed."
		},
		{
			question: "What if we need help outside of business hours?",
			answer: "Our main support lines operate during business hours, but we have a 24/7 emergency support line for crisis situations. For non-urgent matters, you can leave a message or send an email, and we'll respond within 24 hours."
		},
		{
			question: "How do I know if your services are right for my family?",
			answer: "The best way to find out is to contact us for a free consultation. We'll discuss your specific situation, needs, and concerns to determine how we can best support your family's elderly care journey."
		}
	];
</script>

<!-- Contact Us Page -->
<section class="bg-gray-50 py-20 fade-in-on-scroll">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
				<span class="gradient-text">Contact Us</span>
			</h1>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in stagger-1">
				Ready to get the elderly care support you need? Our team is here to help families, organizations, and individuals navigate the path to better senior care.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div class="bg-white rounded-2xl p-8 shadow-lg hover-lift animate-fade-in-left">
				<h2 class="text-2xl font-bold text-gray-900 mb-6 animate-fade-in">Send Us a Message</h2>
				<form class="space-y-6">
					<!-- Contact Type -->
					<div class="animate-fade-in stagger-1">
						<label class="block text-sm font-medium text-gray-700 mb-2">I am a:</label>
						<select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover-glow">
							<option value="">Select your role</option>
							<option value="family-member">Family Member/Guardian</option>
							<option value="senior">Senior Seeking Support</option>
							<option value="ngo">NGO/Non-Profit Organization</option>
							<option value="healthcare">Healthcare Professional</option>
							<option value="government">Government Agency</option>
							<option value="volunteer">Volunteer/Donor</option>
							<option value="other">Other</option>
						</select>
					</div>

					<!-- Name Fields -->
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label for="first-name" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
							<input type="text" id="first-name" name="first-name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
						</div>
						<div>
							<label for="last-name" class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
							<input type="text" id="last-name" name="last-name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
						</div>
					</div>

					<!-- Contact Information -->
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
							<input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
						</div>
						<div>
							<label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
							<input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
						</div>
					</div>

					<!-- Organization (if applicable) -->
					<div>
						<label for="organization" class="block text-sm font-medium text-gray-700 mb-2">Organization (if applicable)</label>
						<input type="text" id="organization" name="organization" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
					</div>

					<!-- Location -->
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label for="state" class="block text-sm font-medium text-gray-700 mb-2">State *</label>
							<select id="state" name="state" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
								<option value="">Select your state</option>
								<option value="lagos">Lagos State</option>
								<option value="abuja">FCT Abuja</option>
								<option value="rivers">Rivers State</option>
								<option value="imo">Imo State</option>
								<option value="anambra">Anambra State</option>
								<option value="ogun">Ogun State</option>
								<option value="oyo">Oyo State</option>
								<option value="kano">Kano State</option>
								<option value="kaduna">Kaduna State</option>
								<option value="other">Other</option>
							</select>
						</div>
						<div>
							<label for="city" class="block text-sm font-medium text-gray-700 mb-2">City/Local Government</label>
							<input type="text" id="city" name="city" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
						</div>
					</div>

					<!-- Age Range -->
					<div>
						<label class="block text-sm font-medium text-gray-700 mb-2">Age range of person needing care:</label>
						<select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
							<option value="">Select age range</option>
							<option value="60-70">60-70 years</option>
							<option value="71-80">71-80 years</option>
							<option value="81-90">81-90 years</option>
							<option value="90+">90+ years</option>
							<option value="multiple">Multiple elderly family members</option>
						</select>
					</div>

					<!-- Services Interested In -->
					<div>
						<label class="block text-sm font-medium text-gray-700 mb-2">Services You're Interested In:</label>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
							<label class="flex items-center">
								<input type="checkbox" class="text-orange-500 focus:ring-orange-500 border-gray-300 rounded">
								<span class="ml-2 text-sm text-gray-700">Family Support & Counseling</span>
							</label>
							<label class="flex items-center">
								<input type="checkbox" class="text-orange-500 focus:ring-orange-500 border-gray-300 rounded">
								<span class="ml-2 text-sm text-gray-700">Wellness & Health Advocacy</span>
							</label>
							<label class="flex items-center">
								<input type="checkbox" class="text-orange-500 focus:ring-orange-500 border-gray-300 rounded">
								<span class="ml-2 text-sm text-gray-700">Resource Coordination</span>
							</label>
							<label class="flex items-center">
								<input type="checkbox" class="text-orange-500 focus:ring-orange-500 border-gray-300 rounded">
								<span class="ml-2 text-sm text-gray-700">Community Integration</span>
							</label>
							<label class="flex items-center">
								<input type="checkbox" class="text-orange-500 focus:ring-orange-500 border-gray-300 rounded">
								<span class="ml-2 text-sm text-gray-700">Education & Training</span>
							</label>
							<label class="flex items-center">
								<input type="checkbox" class="text-orange-500 focus:ring-orange-500 border-gray-300 rounded">
								<span class="ml-2 text-sm text-gray-700">Advocacy & Rights</span>
							</label>
						</div>
					</div>

					<!-- Budget Range -->
					<div>
						<label class="block text-sm font-medium text-gray-700 mb-2">Estimated monthly budget for care services:</label>
						<select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
							<option value="">Select budget range</option>
							<option value="under-50k">Under ₦50,000</option>
							<option value="50k-100k">₦50,000 - ₦100,000</option>
							<option value="100k-200k">₦100,000 - ₦200,000</option>
							<option value="200k-500k">₦200,000 - ₦500,000</option>
							<option value="500k+">₦500,000+</option>
							<option value="flexible">Budget is flexible</option>
							<option value="insurance">Covered by insurance</option>
							<option value="discuss">Prefer to discuss</option>
						</select>
					</div>

					<!-- Message -->
					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 mb-2">Tell us about your situation *</label>
						<textarea id="message" name="message" rows="4" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="The more details you provide, the better we can help you."></textarea>
					</div>

					<!-- Newsletter Signup -->
					<div class="border-t border-gray-200 pt-6">
						<label class="flex items-center">
							<input type="checkbox" class="text-orange-500 focus:ring-orange-500 border-gray-300 rounded">
							<span class="ml-2 text-sm text-gray-700">
								I would like to receive helpful resources, tips, and updates about elderly care via email
							</span>
						</label>
					</div>

					<!-- Submit Button -->
					<button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
						Send Message
					</button>
				</form>
			</div>

			<!-- Contact Information -->
			<div class="space-y-8 animate-fade-in-right">
				<!-- Quick Contact -->
				<div class="bg-white rounded-2xl p-8 shadow-lg hover-lift">
					<h2 class="text-2xl font-bold text-gray-900 mb-6 animate-fade-in">Get In Touch</h2>
					<div class="space-y-6">
						<!-- Phone -->
						<div class="flex items-start animate-fade-in stagger-1 hover-scale transition-all duration-300">
							<div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 animate-pulse-glow">
								<svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-gray-900">Call Us</h3>
								<p class="text-gray-600 mb-2">Available 24/7 for urgent support</p>
								<p class="text-orange-500 font-medium text-lg gradient-text">+234-801-NAN-CARE (626-2273)</p>
								<p class="text-sm text-gray-500">Toll-free nationwide</p>
							</div>
						</div>

						<!-- Email -->
						<div class="flex items-start">
							<div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
								<svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-gray-900">Email Us</h3>
								<p class="text-gray-600 mb-2">Get detailed information and resources</p>
								<p class="text-orange-500 font-medium">support@nancare.org</p>
								<p class="text-sm text-gray-500">Response within 24 hours</p>
							</div>
						</div>

						<!-- Office Hours -->
						<div class="flex items-start">
							<div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
								<svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-gray-900">Office Hours</h3>
								<p class="text-gray-600 mb-2">Monday - Friday: 8:00 AM - 6:00 PM</p>
								<p class="text-gray-600 mb-2">Saturday: 9:00 AM - 4:00 PM</p>
								<p class="text-gray-600">Sunday: Emergency calls only</p>
								<p class="text-sm text-gray-500 mt-2">All times Eastern Standard Time</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Emergency Contact -->
				<div class="bg-red-50 border border-red-200 rounded-2xl p-8">
					<h3 class="text-xl font-bold text-red-900 mb-4">Emergency Support</h3>
					<p class="text-red-700 mb-4">
						If you're experiencing an elderly care emergency or crisis situation, call our 24/7 emergency line:
					</p>
					<div class="text-center">
						<p class="text-2xl font-bold text-red-600">+234-801-HELP-NOW</p>
						<p class="text-sm text-red-600">(+234-801-435-7669)</p>
					</div>
					<p class="text-sm text-red-600 mt-4">
						For life-threatening situations, please call 911 immediately.
					</p>
				</div>

				<!-- Regional Offices -->
				<div class="bg-white rounded-2xl p-8 shadow-lg">
					<h3 class="text-xl font-bold text-gray-900 mb-6">Regional Offices</h3>
					<div class="space-y-4">
						<div>
							<h4 class="font-semibold text-gray-900">Southwest Region</h4>
							<p class="text-gray-600">Lagos State • Ogun State • Oyo State</p>
						</div>
						<div>
							<h4 class="font-semibold text-gray-900">Southeast Region</h4>
							<p class="text-gray-600">Imo State • Anambra State • Abia State</p>
						</div>
						<div>
							<h4 class="font-semibold text-gray-900">South-South Region</h4>
							<p class="text-gray-600">Rivers State • Delta State • Cross River State</p>
						</div>
						<div>
							<h4 class="font-semibold text-gray-900">Federal Capital Territory</h4>
							<p class="text-gray-600">FCT Abuja • Kano State • Kaduna State</p>
						</div>
					</div>
					<button class="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
						Find Your Local Office
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="py-20 bg-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
		
		<div class="space-y-4">
			{#each faqs as faq, index}
				<div class="border border-gray-200 rounded-lg overflow-hidden">
					<button 
						on:click={() => toggleFAQ(index)}
						class="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors duration-200"
					>
						<h3 class="text-lg font-semibold text-gray-900">{faq.question}</h3>
						<svg 
							class="w-5 h-5 text-gray-500 transform transition-transform duration-200"
							class:rotate-180={openFAQ === index}
							fill="none" 
							stroke="currentColor" 
							viewBox="0 0 24 24"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if openFAQ === index}
						<div class="px-6 pb-4 bg-gray-50">
							<p class="text-gray-600">{faq.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="py-20 bg-orange-500 md:rounded-2xl shadow">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
		<p class="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
			Don't wait to get the elderly care support you need. Our compassionate team is standing by to help you navigate this journey.
		</p>
		
		<div class="flex flex-col sm:flex-row justify-center gap-4">
			<a href="tel:+234-801-626-2273" class="bg-white hover:bg-gray-100 text-orange-500 px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200">
				Call Now: +234-801-NAN-CARE
			</a>
			<a href="#contact-form" class="border-2 border-white hover:bg-white hover:text-orange-500 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200">
				Send Message
			</a>
		</div>
	</div>
</section>
