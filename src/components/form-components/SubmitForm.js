import { useEffect } from "react";

export default function SubmitForm({ handleSubmit, formData }) {
  useEffect(() => {
    if (formData.phone === "") {
      delete formData.phone;
    }

    if (formData.had_covid_at === "") {
      delete formData.had_covid_at;
    }

    if (formData.vaccinated_at === "") {
      delete formData.vaccinated_at;
    }

    formData.skills.map((skill) => {
      skill.id = Number(skill.id);
      skill.experience = Number(skill.experience);
      return skill;
    });

    formData.had_covid = formData?.had_covid === "true" ? true : false;
    formData.vaccinated = formData?.vaccinated === "true" ? true : false;
    formData.will_organize_devtalk =
      formData.will_organize_devtalk === "true" ? true : false;

    console.log(formData);
  }, [formData]);

  return (
    <div>
      <button
        type="submit"
        form="form"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Submite
      </button>
      <a href="/redberrian-insights" target="_self">go back</a>
    </div>
  );
}
