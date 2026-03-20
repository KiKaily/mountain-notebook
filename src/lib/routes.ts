import { teamMembers, type TeamMember } from "@/lib/team";

export type AppLanguage = "ca" | "es" | "en";
export type SectionKey = "second" | "team" | "contact";

const sectionHashMap: Record<SectionKey, Record<AppLanguage, string>> = {
	second: {
		ca: "naixement",
		es: "nacimiento",
		en: "born-from",
	},
	team: {
		ca: "equip",
		es: "equipo",
		en: "team",
	},
	contact: {
		ca: "contacte",
		es: "contacto",
		en: "contact",
	},
};

const readMorePathMap: Record<AppLanguage, string> = {
	ca: "/naixement_llegir_mes",
	es: "/nacimiento_leer_mas",
	en: "/born_from_read_more",
};

const teamBasePathMap: Record<AppLanguage, string> = {
	ca: "/equip",
	es: "/equipo",
	en: "/team",
};

const sectionElementMap: Record<SectionKey, string> = {
	second: "second-section",
	team: "team",
	contact: "contact-section",
};

export const normalizeLanguage = (language?: string): AppLanguage => {
	if (language?.startsWith("es")) return "es";
	if (language?.startsWith("en")) return "en";
	return "ca";
};

export const slugify = (value: string) =>
	value
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");

export const getMemberSlug = (member: TeamMember) => slugify(member.name);

export const findMemberBySlug = (slug?: string) =>
	teamMembers.find((member) => getMemberSlug(member) === slug);

export const getSectionHash = (section: SectionKey, language: string) =>
	`#${sectionHashMap[section][normalizeLanguage(language)]}`;

export const getReadMorePath = (language: string) =>
	readMorePathMap[normalizeLanguage(language)];

export const getTeamBasePath = (language: string) =>
	teamBasePathMap[normalizeLanguage(language)];

export const getTeamMemberPath = (language: string, member: TeamMember) =>
	`${getTeamBasePath(language)}/${getMemberSlug(member)}`;

export const resolveHashToSectionId = (hash: string) => {
	const cleanedHash = hash.replace(/^#/, "");

	for (const [section, translations] of Object.entries(sectionHashMap) as Array<
		[SectionKey, Record<AppLanguage, string>]
	>) {
		if (Object.values(translations).includes(cleanedHash)) {
			return sectionElementMap[section];
		}
	}

	return cleanedHash || undefined;
};

export const translateHash = (hash: string, targetLanguage: string) => {
	if (!hash) return "";

	const cleanedHash = hash.replace(/^#/, "");
	for (const [section, translations] of Object.entries(sectionHashMap) as Array<
		[SectionKey, Record<AppLanguage, string>]
	>) {
		if (Object.values(translations).includes(cleanedHash)) {
			return `#${translations[normalizeLanguage(targetLanguage)]}`;
		}
	}

	return hash;
};

export const translatePath = (pathname: string, targetLanguage: string) => {
	const normalizedLanguage = normalizeLanguage(targetLanguage);

	if (pathname === "/") return "/";

	if (Object.values(readMorePathMap).includes(pathname)) {
		return readMorePathMap[normalizedLanguage];
	}

	for (const teamBase of Object.values(teamBasePathMap)) {
		if (pathname.startsWith(`${teamBase}/`)) {
			const slug = pathname.slice(teamBase.length + 1);
			const member = findMemberBySlug(slug);
			if (member) {
				return getTeamMemberPath(normalizedLanguage, member);
			}
		}
	}

	return pathname;
};
