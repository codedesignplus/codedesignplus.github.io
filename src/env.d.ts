/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface Window {
    onRecaptchaSuccess: () => void;
    onRecaptchaExpired: () => void;
}