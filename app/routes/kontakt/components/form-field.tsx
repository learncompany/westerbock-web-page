export default function FormField({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string
  name: string
  placeholder?: string
  type?: string
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-[#0F446A]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#0F446A] outline-none transition placeholder:text-slate-400 focus:border-[#139033] focus:ring-2 focus:ring-[#139033]/10"
      />

    </div>
  )
}