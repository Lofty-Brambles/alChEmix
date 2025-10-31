"use client";

import { Calendar, MapPin, Users } from "lucide-react";

export function Description() {
	return (
		<section className="w-full flex flex-col items-center justify-center text-center py-16 px-4 bg-linear-to-b from-white to-sky-50">
			{/* Header */}
			<div className="max-w-3xl">
				<h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">
					Igniting Innovation in Chemical Engineering
				</h2>
				<div className="flex items-center justify-center gap-4 text-slate-600 mb-4">
					<div className="flex items-center gap-1">
						<Calendar className="w-4 h-4 text-emerald-500" />
						<span>November 14–15, 2025</span>
					</div>
					<div className="flex items-center gap-1">
						<MapPin className="w-4 h-4 text-emerald-500" />
						<span>HL Roy Auditorium</span>
					</div>
				</div>
				<p className="text-slate-500 text-lg mb-10">
					Join us for two days of groundbreaking research presentations, interactive workshops, and
					networking opportunities with industry leaders and academic pioneers in chemical
					engineering.
				</p>
				{/* Buttons */}
				<div className="flex justify-center gap-4 mb-10">
					<button className="px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition flex items-center gap-2">
						Register Now →
					</button>
					<button className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition">
						View Schedule
					</button>
				</div>
			</div>

			{/* Replacing bottom stats with icon cards */}
			<div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
				<div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-[0_4px_20px_rgba(56,189,248,0.15)] hover:shadow-[0_6px_24px_rgba(56,189,248,0.25)] transition w-64">
					<Calendar className="w-8 h-8 text-emerald-500 mb-3" />
					<h3 className="text-slate-900 font-semibold">Event Date</h3>
					<p className="text-emerald-600 font-medium">November 14–15, 2025</p>
					<p className="text-slate-500 text-sm">Two full days of sessions</p>
				</div>

				<div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-[0_4px_20px_rgba(56,189,248,0.15)] hover:shadow-[0_6px_24px_rgba(56,189,248,0.25)] transition w-64">
					<MapPin className="w-8 h-8 text-emerald-500 mb-3" />
					<h3 className="text-slate-900 font-semibold">Venue</h3>
					<p className="text-emerald-600 font-medium">HL ROY Auditorium</p>
					<p className="text-slate-500 text-sm">Department of IIChE</p>
				</div>

				<div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-[0_4px_20px_rgba(56,189,248,0.15)] hover:shadow-[0_6px_24px_rgba(56,189,248,0.25)] transition w-64">
					<Users className="w-8 h-8 text-emerald-500 mb-3" />
					<h3 className="text-slate-900 font-semibold">Participants</h3>
					<p className="text-emerald-600 font-medium">500+ Expected</p>
					<p className="text-slate-500 text-sm">Students, faculty, and industry experts</p>
				</div>
			</div>
		</section>
	);
}
