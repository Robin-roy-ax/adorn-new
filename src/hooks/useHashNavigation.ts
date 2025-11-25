"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to detect if the current section was navigated to via hash link
 * @param sectionId - The ID of the section to check (without the # symbol)
 * @returns boolean - true if navigated via hash link, false otherwise
 */
export function useHashNavigation(sectionId: string): boolean {
    const [isHashNav, setIsHashNav] = useState(false);

    useEffect(() => {
        // Check if the current hash matches the section ID
        const checkHash = () => {
            const hash = window.location.hash.replace("#", "");
            setIsHashNav(hash === sectionId);
        };

        // Check on mount
        checkHash();

        // Listen for hash changes
        window.addEventListener("hashchange", checkHash);

        // Cleanup
        return () => {
            window.removeEventListener("hashchange", checkHash);
        };
    }, [sectionId]);

    return isHashNav;
}
