export default function AdmissonsApplyCard() {
  return (
    <div className="bg-white rounded-xl px-6 py-7 shadow-xl">
      <span className="block w-fit bg-primary-300/20 font-semibold text-primary-600 py-1 px-3 mb-4 rounded-2xl uppercase">
        admissions open
      </span>

      <h2 className="font-bold text-2xl mb-2">Ready to apply?</h2>

      <p className="text-grey-heading mb-6">
        Start your child&apos;s application process online today. It takes less than 15 minutes to
        complete the initial form.
      </p>

      <button className="font-semibold text-white bg-primary-700 p-4 w-full rounded-xl">
        Apply now
      </button>
    </div>
  );
}
