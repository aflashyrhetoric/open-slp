<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta property="og:type" content="website">
        <meta property="og:site_name" content="{{ config('app.name') }}">
        <meta property="og:title" content="{{ config('app.name') }}">
        <meta property="og:description" content="Curated resources for SLPs from across the web">
        <meta property="og:image" content="{{ url('/logo.svg') }}">
        <meta property="og:url" content="{{ url()->current() }}">

        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="{{ config('app.name') }}">
        <meta name="twitter:description" content="Curated resources for SLPs from across the web">
        <meta name="twitter:image" content="{{ url('/logo.svg') }}">

        <!-- Fathom - beautiful, simple website analytics -->
        <script src="https://cdn.usefathom.com/script.js" data-spa="auto" data-site="VTSQFOSZ" defer></script>
        <!-- / Fathom -->

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        // document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        @php
            $ldJson = json_encode([
                '@context' => 'https://schema.org',
                '@type' => 'Organization',
                'name' => config('app.name'),
                'url' => url('/'),
                'logo' => url('/logo.svg'),
                'description' => 'Curated resources for SLPs from across the web',
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
        @endphp
        <script type="application/ld+json">
            {!! $ldJson !!}
        </script>

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
