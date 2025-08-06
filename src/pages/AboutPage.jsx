function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Himtara</h1>
      <div className="space-y-6">
        <p className="text-lg text-gray-600">
          From the pristine peaks of the Himalayas to your doorstep, we bring you the purest water nature has to offer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#42B3D5] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p>To provide pure, safe, and healthy drinking water to every household.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p>To become India's most trusted water brand.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;