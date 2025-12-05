"use client";

import React, { useEffect } from "react";
import id from "@/app/portofolio/lang/id.json";
import en from "@/app/portofolio/lang/en.json";

const Lang: { [key: string]: any } = {
	id,
	en,
};

type LangContextType = {
	lang: string;
	setLang: (newLang: string) => void;
	t: (key: string) => string;
};

const LangContext = React.createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
	const [lang, setLangState] = React.useState<string>("en");

	useEffect(() => {
		const saved = localStorage.getItem("lang");
		if (saved) {
			setLangState(saved);
		}
	}, []);

	const setLang = (newLang: string) => {
		setLangState(newLang);
		localStorage.setItem("lang", newLang);
	};

	const t = (path: string) => {
		const splitPath = path.split(".");
		let result: any = Lang[lang];

		splitPath.forEach((p) => {
			if (result && result[p]) {
				result = result[p];
			}
		});

		return (result as string) || (path as string);
	};

	const value: LangContextType = { lang, setLang, t };
	return (
		<LangContext.Provider value={value}>
			{children}
		</LangContext.Provider>
	);
};

export const useLang = () => {
	const context = React.useContext(LangContext);
	if (!context) {
		throw new Error("useLang must be used within a LangProvider");
	}
	return context;
};

export default useLang;
