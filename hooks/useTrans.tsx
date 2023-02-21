import { NextRouter, useRouter } from "next/router";
import { useMemo } from "react";
import en from "public/lang/en";

export default function useTrans() {
  const { locale }: any = useRouter();
  const trans = useMemo(() => {
    const lang: any = {
      ["en"]: en,
    };
    return lang[locale];
  }, [locale]);
  return trans;
}
