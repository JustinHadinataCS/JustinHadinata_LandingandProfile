import profile from "./profile.png";

function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <img
          src={profile}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold">Justin Hadinata</h2>
        <p className="text-gray-600 text-lg">
          Full Stack Developer | Tech Enthusiast
        </p>
        <p className="text-gray-400">
          19-year-old React enthusiast from Bangka Belitung. Passionate about
          building interactive web experiences and exploring the world of
          front-end development
        </p>
      </div>
    </div>
  );
}

export default ProfilePage;
