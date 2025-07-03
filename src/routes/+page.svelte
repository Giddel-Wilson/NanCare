<script lang="ts">
	// NanCare Elderly Support Hub - Updated July 3, 2025
	// Sample data for user avatars and testimonials
	const userAvatars = [
		'https://i.pinimg.com/736x/5e/a6/02/5ea6025de1ddf0efc423dbfde2dc1ff3.jpg',
		'https://i.pinimg.com/736x/63/47/19/6347197cfc52dc1fe7e7bc89f625aaaa.jpg',
		'https://i.pinimg.com/736x/fe/21/58/fe21589f262d51539eddeeec5914294c.jpg'
	];

	const testimonials = [
		{
			text: "NanCare helped me find the perfect support for my elderly mother. Peace of mind!",
			author: "Sabrina Davis",
			role: "Daughter & Caregiver",
			avatar: 'https://i.pinimg.com/736x/d9/70/7c/d9707cf597a0f9d830eb37f57f169991.jpg'
		},
		{
			text: "Outstanding organization that truly understands the needs of seniors and families.",
			author: "Sarah Johnson", 
			role: "Family Care Coordinator",
			avatar: 'https://i.pinimg.com/736x/94/a9/c3/94a9c356708d5566d91f776ae3d5e1f5.jpg'
		},
        {
			text: "The support we received for my grandmother was beyond our expectations!",
			author: "David Jones", 
			role: "Guardian",
			avatar: 'https://i.pinimg.com/736x/6e/33/4b/6e334b5ee39cb9148579c45020adfeaa.jpg'
		}
	];

	const communityMembers = [
		{ name: "Taylor Lee", role: "Senior Care Specialist", avatar: 'https://i.pinimg.com/736x/fe/21/58/fe21589f262d51539eddeeec5914294c.jpg' },
		{ name: "Morgan Quinn", role: "Family Support Lead", avatar: 'https://i.pinimg.com/736x/5e/a6/02/5ea6025de1ddf0efc423dbfde2dc1ff3.jpg' },
		{ name: "Jamie Kim", role: "Wellness Coordinator", avatar: 'https://i.pinimg.com/736x/63/47/19/6347197cfc52dc1fe7e7bc89f625aaaa.jpg' }
	];

	let currentTestimonial = 0;

	function nextTestimonial() {
		currentTestimonial = (currentTestimonial + 1) % testimonials.length;
	}

	function prevTestimonial() {
		currentTestimonial = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
	}

	function goToTestimonial(index: number) {
		currentTestimonial = index;
	}

	// Auto-play slider and animations
	import { onMount } from 'svelte';
	import { reinitializeAnimations } from '$lib/animations';
	
	onMount(() => {
		// Re-initialize animations for this page
		reinitializeAnimations();
		
		// Auto-play testimonials
		const interval = setInterval(nextTestimonial, 5000); // Change every 5 seconds
		return () => clearInterval(interval);
	});
</script>

<!-- Hero Section -->
<section class="bg-gray-50 py-20 fade-in-on-scroll">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
				Supporting<br>
				<span class="gradient-text">Seniors Everywhere</span>
			</h1>
			<p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in stagger-1">
				A dedicated welfare and support organization helping families, NGOs, government agencies, and volunteers improve the quality of life for seniors.
			</p>
			
			<!-- User Avatars -->
			<div class="flex flex-col md:flex-row justify-center items-center mb-8 animate-fade-in stagger-2">
				<div class="flex -space-x-2">
					{#each userAvatars as avatar, i}
						<img src={avatar} alt="User {i + 1}" class="w-12 h-12 rounded-full border-2 border-white hover-scale transition-all duration-300 stagger-{i + 1}">
					{/each}
				</div>
				<p class="ml-4 text-sm text-gray-600">
					Connect with us to access elderly care support and family assistance services!
				</p>
			</div>
			
			<button class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium btn-animate hover-lift animate-fade-in stagger-3 mb-12">
				Get Support
			</button>
		</div>
	</div>
</section>

<!-- Dashboard Section -->
<section class="py-20 bg-white shadow md:rounded-2xl fade-in-on-scroll">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Left Side - Dashboard Preview -->
			<div class="relative animate-fade-in-left">
				<!-- Desktop Dashboard -->
				<div class="bg-gray-900 rounded-lg p-6 shadow-2xl hover-lift">
					<div class="bg-gray-800 rounded-lg p-4">
						<div class="flex items-center justify-between mb-6">
							<h3 class="text-white text-lg font-semibold animate-fade-in stagger-1">Good evening</h3>
							<div class="flex space-x-2">
								<div class="w-3 h-3 bg-green-400 rounded-full"></div>
								<div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
								<div class="w-3 h-3 bg-red-400 rounded-full"></div>
							</div>
						</div>
						
						<!-- Dashboard Content -->
						<div class="grid grid-cols-3 gap-4 mb-6">
							<div class="bg-orange-500 p-4 rounded-lg">
								<h4 class="text-white text-sm font-medium mb-2">REFERRALS (4)</h4>
								<div class="space-y-2">
									<div class="bg-orange-400 p-2 rounded text-xs text-white">Family consultations</div>
									<div class="bg-orange-400 p-2 rounded text-xs text-white">...pending review (4)</div>
								</div>
							</div>
							<div class="bg-yellow-500 p-4 rounded-lg">
								<h4 class="text-white text-sm font-medium mb-2">IN PROGRESS (4)</h4>
								<div class="space-y-2">
									<div class="bg-yellow-400 p-2 rounded text-xs text-white">Care plan development</div>
									<div class="bg-yellow-400 p-2 rounded text-xs text-white">Schedule home visit</div>
								</div>
							</div>
							<div class="bg-green-500 p-4 rounded-lg">
								<h4 class="text-white text-sm font-medium mb-2">COMPLETED (8)</h4>
								<div class="space-y-2">
									<div class="bg-green-400 p-2 rounded text-xs text-white">Senior wellness check</div>
									<div class="bg-green-400 p-2 rounded text-xs text-white">Family support session</div>
									<div class="bg-green-400 p-2 rounded text-xs text-white">Care coordination</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Sidebar -->
				<div class="absolute left-0 top-0 w-16 h-full bg-gray-900 rounded-l-lg">
					<div class="p-4">
						<div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mb-8">
							<span class="text-white font-bold text-xs">NC</span>
						</div>
						<div class="space-y-6">
							<div class="w-6 h-6 bg-gray-600 rounded"></div>
							<div class="w-6 h-6 bg-gray-600 rounded"></div>
							<div class="w-6 h-6 bg-gray-600 rounded"></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Side - Content -->
			<div class="animate-fade-in-right">
				<h2 class="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">About</h2>
				<p class="text-gray-600 mb-6 animate-fade-in stagger-1">
					NanCare is a welfare and support-focused organization dedicated to improving the quality of life for seniors. We build awareness, trust, and provide accessible support for families, care institutions, and government agencies working together in elderly care.
				</p>
				<div class="space-y-4 mb-8">
					<div class="flex items-center animate-fade-in stagger-2 hover-scale">
						<div class="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse-glow"></div>
						<span class="text-gray-700">Wellness Support</span>
					</div>
					<div class="flex items-center animate-fade-in stagger-3 hover-scale">
						<div class="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse-glow"></div>
						<span class="text-gray-700">Family Counseling</span>
					</div>
					<div class="flex items-center animate-fade-in stagger-4 hover-scale">
						<div class="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse-glow"></div>
						<span class="text-gray-700">Care Coordination</span>
					</div>
				</div>

				<h3 class="text-lg font-semibold text-gray-900 mb-4 animate-fade-in stagger-5">Serving:</h3>
				<div class="flex items-center space-x-4 mb-8 animate-fade-in stagger-6">
					<div class="flex -space-x-2">
						{#each userAvatars as avatar, i}
							<img src={avatar} alt="User {i + 1}" class="w-8 h-8 rounded-full border-2 border-white hover-scale transition-all duration-300">
						{/each}
					</div>
					<span class="text-sm text-gray-600">+5,386 families</span>
				</div>

				<h3 class="text-lg font-semibold text-gray-900 mb-4 animate-fade-in">Impact</h3>
				<div class="space-y-3 animate-fade-in stagger-1">
					<div class="flex justify-between items-center">
						<span class="text-sm text-gray-600">Referrals (4)</span>
						<span class="text-sm text-gray-500">60%</span>
					</div>
					<div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
						<div class="bg-orange-500 h-2 rounded-full animate-fade-in-right transition-all duration-1000 ease-out" style="width: 60%"></div>
					</div>
					<div class="flex justify-between items-center">
						<span class="text-sm text-gray-600">In progress (4)</span>
						<span class="text-sm text-gray-500">35%</span>
					</div>
					<div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
						<div class="bg-yellow-500 h-2 rounded-full animate-fade-in-right transition-all duration-1000 ease-out stagger-1" style="width: 35%"></div>
					</div>
					<div class="flex justify-between items-center">
						<span class="text-sm text-gray-600">Completed (8)</span>
					</div>
					<div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
						<div class="bg-green-500 h-2 rounded-full animate-fade-in-right transition-all duration-1000 ease-out stagger-2" style="width: 88%"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Mobile App Section -->
<section class="py-20 bg-gray-50 fade-in-on-scroll">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Left Side - Mobile Mockup -->
			<div class="flex justify-center animate-fade-in-left">
				<div class="relative animate-float">
					<!-- iPhone Mockup -->
					<div class="w-64 h-[500px] bg-black rounded-[3rem] p-2 shadow-2xl hover-lift">
						<div class="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
							<!-- Status Bar -->
							<div class="bg-gray-100 p-4 flex justify-between items-center animate-fade-in stagger-1">
								<span class="text-sm font-medium">9:41</span>
								<div class="flex space-x-1">
									<div class="w-4 h-2 bg-gray-400 rounded-sm"></div>
									<div class="w-1 h-2 bg-gray-400 rounded-sm"></div>
								</div>
							</div>
							
							<!-- App Content -->
							<div class="p-6">
								<div class="flex justify-between items-center mb-6 animate-fade-in stagger-2">
									<h3 class="text-lg font-semibold">Progress</h3>
									<span class="text-sm text-gray-500">This Week</span>
								</div>
								
								<div class="space-y-4">
									<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg animate-fade-in stagger-3 hover-scale">
										<div class="flex items-center">
											<div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 animate-pulse-glow">
												<span class="text-white text-xs">✓</span>
											</div>
											<span class="text-sm">To do (4)</span>
										</div>
										<span class="text-sm text-gray-500">100%</span>
									</div>
									
									<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg animate-fade-in stagger-4 hover-scale">
										<div class="flex items-center">
											<div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3 animate-pulse-glow">
												<span class="text-white text-xs">⟳</span>
											</div>
											<span class="text-sm">In progress (4)</span>
										</div>
										<span class="text-sm text-gray-500">35%</span>
									</div>
									
									<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
										<div class="flex items-center">
											<div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
												<span class="text-white text-xs">★</span>
											</div>
											<span class="text-sm">Resources</span>
										</div>
										<span class="text-sm text-gray-500">New</span>
									</div>
									
									<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
										<div class="flex items-center">
											<div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
												<span class="text-white text-xs">NC</span>
											</div>
											<span class="text-sm">NanCare Documentation</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Side - Content -->
			<div>
				<h4 class="text-orange-500 font-medium mb-2">Wellness Support</h4>
				<h2 class="text-4xl font-bold text-gray-900 mb-6">
					Empowering<br>
					Caregivers Together
				</h2>
				<p class="text-gray-600 mb-8">
					Experience a range of wellness services designed to nurture emotional health, connect caregivers in peer groups, and provide essential self-care resources to promote well-being.
				</p>
				
				<div class="flex space-x-4">
					<button class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
						Join Us
					</button>
					<button class="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
						Learn More
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section class="py-20 bg-white md:rounded-t-2xl shadow fade-in-on-scroll">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<div class="relative">
			<!-- Testimonial Content -->
			<div class="min-h-[200px] flex items-center justify-center">
				<div class="fade-in animate-scale-in">
					<blockquote class="text-2xl md:text-3xl font-medium text-gray-900 mb-8 animate-fade-in">
						"{testimonials[currentTestimonial].text}"
					</blockquote>
					
					<div class="flex justify-center items-center animate-fade-in stagger-1">
						<img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].author} class="w-12 h-12 rounded-full mr-4 hover-scale transition-all duration-300">
						<div class="text-left">
							<div class="font-semibold text-gray-900">{testimonials[currentTestimonial].author}</div>
							<div class="text-gray-600 text-sm">{testimonials[currentTestimonial].role}</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Navigation Arrows -->
			<button 
				aria-label="Previous testimonial"
				on:click={prevTestimonial}
				class="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 hover-scale transition-all duration-300"
			>
				<svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
				</svg>
			</button>
			
			<button 
				on:click={nextTestimonial}
				class="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
			>
				<svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
				</svg>
			</button>
		</div>
		
		<!-- Navigation dots -->
		<div class="flex justify-center space-x-2 mt-8">
			{#each testimonials as _, i}
				<button 
					on:click={() => goToTestimonial(i)}
					class="w-3 h-3 rounded-full transition-colors duration-200"
					class:bg-orange-500={i === currentTestimonial}
					class:bg-gray-300={i !== currentTestimonial}
				></button>
			{/each}
		</div>
	</div>
</section>

<!-- Community Section -->
<section class="py-20 bg-gray-900 relative overflow-hidden md:rounded-b-2xl shadow">
	<div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
	<div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<div class="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
				Join Our Caring<br>
				Community
			</h2>
			<p class="text-gray-600 mb-8 max-w-2xl mx-auto">
				Be part of a compassionate network dedicated to improving the quality of life for seniors. Whether you're a family member seeking support, an NGO looking to partner, a government agency, or a volunteer wanting to make a difference — we welcome you.
			</p>
			
			<div class="flex flex-wrap justify-center gap-4 mb-8">
				{#each communityMembers as member}
					<div class="flex items-center bg-gray-50 rounded-full pr-4 py-2">
						<img src={member.avatar} alt={member.name} class="w-10 h-10 rounded-full mr-3">
						<div class="text-left">
							<div class="font-semibold text-sm text-gray-900">{member.name}</div>
							<div class="text-xs text-gray-600">{member.role}</div>
						</div>
					</div>
				{/each}
			</div>
			
			<div class="flex flex-col sm:flex-row justify-center gap-4">
				<button class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
					Sign Up
				</button>
				<button class="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
					Learn More
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	.fade-in {
		animation: fadeIn 0.5s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
