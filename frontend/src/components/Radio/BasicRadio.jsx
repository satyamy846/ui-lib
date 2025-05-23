
const BasicRadio = ({ name, value, checked, onChange, label }) =>{
    return (
 <label className="flex items-center space-x-3 cursor-pointer group">
      <div className="relative">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
          checked 
            ? 'border-blue-500 bg-blue-500' 
            : 'border-gray-300 group-hover:border-blue-400'
        }`}>
          {checked && (
            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200"></div>
          )}
        </div>
      </div>
      <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200">{label}</span>
    </label>
    )
}

export default BasicRadio;