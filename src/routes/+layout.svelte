<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { initScrollAnimations } from '$lib/animations';
	// Updated July 3, 2025 - NanCare Elderly Support Hub

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		console.log('Mobile menu toggled:', mobileMenuOpen);
	}

	onMount(() => {
		initScrollAnimations();
	});
</script>

<!-- Navigation Header -->
<nav class="bg-transparent fixed w-full px-4 lg:px-auto top-0 py-3 z-50 animate-slide-down">
	<div class="bg-white shadow rounded-4xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hover-lift">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex items-center animate-fade-in-left">
					<a href="./" class="flex-shrink-0 flex items-center hover-scale">
						<div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center animate-pulse-glow">
						<span class="text-white font-bold text-sm">NC</span>
					</div>
					<span class="ml-2 text-xl font-semibold text-gray-900 gradient-text">NanCare</span>
					</a>
			</div>

			<!-- Desktop Navigation Links -->
			<div class="hidden md:block animate-fade-in">
				<div class="ml-10 flex items-baseline space-x-8">
					<a href="/services" class="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 hover-glow stagger-1 rounded-full">
						Our Services
					</a>
					<a href="/about" class="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 hover-glow stagger-2 rounded-full">
						About Us
					</a>
					<a href="/testimonials" class="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium flex items-center transition-all duration-300 hover-glow stagger-3 rounded-full">
						Testimonials
						<span class="ml-1 bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-float">3</span>
					</a>
				</div>
			</div>

			<!-- Desktop Contact Button -->
			<div class="hidden md:flex items-center animate-fade-in-right">
				<a href="/contact" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-medium btn-animate hover-lift">
					Contact Us
				</a>
			</div>

			<!-- Mobile Hamburger Menu -->
			<div class="md:hidden flex items-center animate-fade-in-right">
				<button 
					onclick={toggleMobileMenu}
					class="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-all duration-300"
				>
					<span class="sr-only">Open main menu</span>
					{#if !mobileMenuOpen}
						<!-- Hamburger icon -->
						<svg class="h-6 w-6 transition-transform duration-300" stroke="currentColor" fill="none" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{:else}
						<!-- Close icon -->
						<svg class="h-6 w-6 transition-transform duration-300 rotate-180" stroke="currentColor" fill="none" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden absolute top-full left-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 animate-slide-down">
			<div class="px-4 pt-2 pb-3 space-y-1">
				<a href="/services" class="text-gray-900 hover:text-orange-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 animate-fade-in stagger-1">
					Our Services
				</a>
				<a href="/about" class="text-gray-900 hover:text-orange-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 animate-fade-in stagger-2">
					About Us
				</a>
				<a href="/testimonials" class="text-gray-900 hover:text-orange-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 animate-fade-in stagger-3">
					<div class="flex items-center">
						Testimonials
						<span class="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-float">9</span>
					</div>
				</a>
				<div class="pt-2 animate-fade-in stagger-4">
					<a href="/contact" class="w-full bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg text-base font-medium btn-animate block text-center">
						Contact Us
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>

<!-- Main Content -->
<main class="pt-16 md:pb-10 md:px-10 bg-gray-50">
	{@render children()}
</main>

<!-- Footer -->
<footer class="bg-white shadow py-8 md:py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Mobile Layout -->
		<div class="block md:hidden space-y-6">
			<!-- Logo -->
								<a href="./" class="flex-shrink-0 flex items-center">

				<div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
					<span class="text-white font-bold text-sm">NC</span>
				</div>
				<span class="ml-2 text-xl font-semibold text-gray-900">NanCare</span>
			</a>
			
			<!-- Footer Links -->
			<div class="flex justify-center space-x-6">
				<a href="/services" class="text-gray-600 hover:text-gray-900 text-sm">Our Services</a>
				<a href="/about" class="text-gray-600 hover:text-gray-900 text-sm">About Us</a>
				<a href="/testimonials" class="text-gray-600 hover:text-gray-900 text-sm">Testimonials</a>
			</div>
			
			<!-- Social Links -->
			<div class="text-center">
				<span class="text-gray-600 text-sm block mb-3">Stay Connected</span>
				<div class="flex justify-center space-x-4">
					<a href="javascript:void(0)" class="text-gray-400 hover:text-gray-600">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
						</svg>
					</a>
					<a href="javascript:void(0)" class="text-gray-400 hover:text-gray-600">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"/>
						</svg>
					</a>
					<a href="javascript:void(0)" class="text-gray-400 hover:text-gray-600">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
						</svg>
					</a>
					<a href="javascript:void(0)" class="text-gray-400 hover:text-gray-600">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.90 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd"/>
						</svg>
					</a>
				</div>
			</div>
			
			<!-- Copyright -->
			<div class="text-center">
				<span class="text-gray-500 text-sm">© Copyright 2026 <a href="./">NanCare</a> - Elderly Support Hub</span>
			</div>
		</div>

		<!-- Tablet Layout -->
		<div class="hidden md:block lg:hidden space-y-8">
			<!-- Top Row: Logo and Footer Links -->
			<div class="flex justify-between items-center">
									<a href="./" class="flex-shrink-0 flex items-center">

					<div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
						<span class="text-white font-bold text-sm">NC</span>
					</div>
					<span class="ml-2 text-xl font-semibold text-gray-900">NanCare</span>
				</a>
				
				<div class="flex space-x-6">
					<a href="/services" class="text-gray-600 hover:text-gray-900 text-sm">Our Services</a>
					<a href="/about" class="text-gray-600 hover:text-gray-900 text-sm">About Us</a>
					<a href="/testimonials" class="text-gray-600 hover:text-gray-900 text-sm">Testimonials</a>
				</div>
			</div>
			
			<!-- Bottom Row: Social Links and Copyright -->
			<div class="flex justify-between items-center">
				<div class="flex items-center space-x-6">
					<span class="text-gray-600 text-sm">Stay Connected</span>
					<div class="flex space-x-4">
						<a href="javascript:void(0)" class="text-gray-400 hover:text-gray-600">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
							</svg>
						</a>
						<a href="javascript:void(0)" class="text-gray-400 hover:text-gray-600">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"/>
							</svg>
						</a>
						<a href="javascript:void(0)" class="text-gray-400 hover:text-gray-600">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
							</svg>
						</a>
						<a href="javascript:void(0)" class="text-gray-400 hover:text-gray-600">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.90 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd"/>
							</svg>
						</a>
					</div>
				</div>
				
				<span class="text-gray-500 text-sm">© Copyright 2026 <a href="./">NanCare</a> - Elderly Support Hub</span>
			</div>
		</div>

		<!-- Desktop Layout -->
		<div class="hidden lg:flex justify-between items-center">
			<!-- Logo and Copyright -->
			<div class="flex items-center">
				<div class="flex items-center">
					<div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
						<span class="text-white font-bold text-sm">NC</span>
					</div>
					<span class="ml-2 text-xl font-semibold text-gray-900"><a href="./">NanCare</a></span>
				</div>
				<span class="ml-8 text-gray-500 text-sm">© Copyright 2026 <a href="./">NanCare</a> - Elderly Support Hub</span>
			</div>
			
			<!-- Footer Links -->
			<div class="flex space-x-8">
				<a href="/services" class="text-gray-600 hover:text-gray-900 text-sm">Our Services</a>
				<a href="/about" class="text-gray-600 hover:text-gray-900 text-sm">About Us</a>
				<a href="/testimonials" class="text-gray-600 hover:text-gray-900 text-sm">Testimonials</a>
			</div>
			
			<!-- Social Links -->
			<div class="flex items-center space-x-6">
				<span class="text-gray-600 text-sm">Stay Connected</span>
				<div class="flex space-x-4">
					<a href="javascript:void(0)" class="text-gray-400 hover:text-gray-600">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
						</svg>
					</a>
					<a href="javascript:void(0)" class="text-gray-400 hover:text-gray-600">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"/>
						</svg>
					</a>
					<a href="javascript:void(0)" class="text-gray-400 hover:text-gray-600">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
						</svg>
					</a>
					<a href="javascript:void(0)" class="text-gray-400 hover:text-gray-600">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.90 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd"/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>