const Page = () => {
  return (
    <div className="bg-gray-100 p-10 flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md w-[400px] space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Appearance</h2>
        <p className="text-sm text-gray-500">Set or customize your preferences for the system</p>

        {/* Language (solo visual) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
          <div className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-gray-100">
            English
          </div>
        </div>

        {/* Interface Theme */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Interface theme</p>
          <p className="text-xs text-gray-500 mb-3">Customize your application appearance</p>
          <div className="flex space-x-4">
            <div className="border-2 border-gray-300 rounded-lg p-3 w-1/3 flex flex-col items-center text-sm">
              <div className="bg-gradient-to-r from-purple-200 to-gray-100 h-16 w-full rounded mb-2"></div>
              <span className="text-gray-500">Auto</span>
            </div>
            <div className="border-2 border-indigo-500 rounded-lg p-3 w-1/3 flex flex-col items-center text-sm">
              <div className="bg-white border border-gray-300 h-16 w-full rounded mb-2"></div>
              <span className="text-gray-700">Light</span>
            </div>
            <div className="border-2 border-gray-300 rounded-lg p-3 w-1/3 flex flex-col items-center text-sm">
              <div className="bg-gradient-to-r from-indigo-700 to-purple-800 h-16 w-full rounded mb-2"></div>
              <span className="text-gray-200">Dark</span>
            </div>
          </div>
        </div>

        {/* Accent Color */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Accent color</p>
          <p className="text-xs text-gray-500 mb-3">Pick your platform&rsquo;s main color</p>
          <div className="flex space-x-3">
            <div className="w-5 h-5 rounded-full bg-red-400 border-2 border-white shadow"></div>
            <div className="w-5 h-5 rounded-full bg-orange-400"></div>
            <div className="w-5 h-5 rounded-full bg-yellow-300"></div>
            <div className="w-5 h-5 rounded-full bg-green-400"></div>
            <div className="w-5 h-5 rounded-full bg-blue-400"></div>
            <div className="w-5 h-5 rounded-full bg-purple-400"></div>
          </div>
        </div>

        {/* Toggles (estáticos) */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Reduce motion</span>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <div className="w-10 h-5 bg-indigo-500 rounded-full shadow-inner"></div>
              <div className="absolute left-5 top-0.5 w-4 h-4 bg-white rounded-full shadow"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Auto play</span>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <div className="w-10 h-5 bg-indigo-500 rounded-full shadow-inner"></div>
              <div className="absolute left-5 top-0.5 w-4 h-4 bg-white rounded-full shadow"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">High quality photo</span>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner"></div>
              <div className="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
