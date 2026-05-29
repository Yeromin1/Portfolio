import { useTranslation } from "react-i18next";

const useTranslateSkills = (skills, namespace) => {
  const { t } = useTranslation("skills");

  return skills.map((skill) => ({
    ...skill,
    title: t(`${namespace}.${skill.key}`),
  }));
};

export default useTranslateSkills;
