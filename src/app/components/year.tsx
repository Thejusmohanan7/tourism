'use client';
import { useEffect, useState } from 'react';

export default function Year() {
    const [year, setYear] = useState(2026); // fallback used during prerender
    useEffect(() => setYear(new Date().getFullYear()), []);
    return <>{year}</>;
}