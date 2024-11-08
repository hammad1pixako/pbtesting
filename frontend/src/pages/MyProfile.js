import React, { useContext } from 'react';
import { FaUserCircle, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaGraduationCap, FaBriefcase, FaGlobe } from 'react-icons/fa';
import { UserContext } from '../context';  // Assuming you're using UserContext for user state management

const UserProfile = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Profile Banner and Picture */}
      <div className="relative">
        {/* Banner Image */}
        <div className="w-full h-56 bg-gray-300">
          {user.bannerImage && <img src={user.bannerImage} alt="Banner" className="w-full h-full object-cover" />}
        </div>
        
        {/* Profile Picture */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-36">
          <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
            {user.profileImage ? (
              <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-4xl text-white">
                <FaUserCircle />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="max-w-5xl mx-auto bg-white p-8 mt-24 rounded-lg shadow-md">
        {/* User Info */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-lg text-gray-600">{user.email}</p>
        </div>

        {/* Tabs for Sections */}
        <div className="flex justify-center space-x-8 border-b pb-4 mb-8">
          <button className="text-lg font-medium text-gray-600 hover:text-gray-800">About</button>
          <button className="text-lg font-medium text-gray-600 hover:text-gray-800">Friends</button>
          <button className="text-lg font-medium text-gray-600 hover:text-gray-800">Photos</button>
          <button className="text-lg font-medium text-gray-600 hover:text-gray-800">Posts</button>
        </div>

        {/* About Section (User Info in Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Bio</h3>
            <p className="text-gray-600 mt-2">{user.bio}</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Location</h3>
            <p className="text-gray-600 mt-2">{user.location}</p>
          </div>

          {/* Skills */}
          {user.skills && user.skills.length > 0 && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {user.skills.map((skill, index) => (
                  <span key={index} className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {user.education && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Education</h3>
              <div className="flex items-center text-gray-600 mt-2">
                <FaGraduationCap className="mr-2 text-indigo-600" />
                <p>{user.education}</p>
              </div>
            </div>
          )}

          {/* Work */}
          {user.work && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Work</h3>
              <div className="flex items-center text-gray-600 mt-2">
                <FaBriefcase className="mr-2 text-indigo-600" />
                <p>{user.work}</p>
              </div>
            </div>
          )}

          {/* Contact Info */}
          {user.phone && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Contact</h3>
              <p className="text-gray-600 mt-2">{user.phone}</p>
            </div>
          )}
        </div>

        {/* Follow/Message Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Add Friend
          </button>
          <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 transition duration-300">
            Message
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center py-6 mt-12 bg-gray-800 text-white">
        <p>&copy; 2024 Your App. All Rights Reserved.</p>
      </div>
    </div>
  );
};

// Example usage: Render another user's profile page.
const Example = () => {
  const { state } = useContext(UserContext); // Assuming UserContext is providing the user state
  const otherUser = {
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    profileImage: 'https://randomuser.me/api/portraits/women/68.jpg', // Placeholder for profile image
    bannerImage: 'https://via.placeholder.com/1400x400', // Placeholder for banner image
    bio: 'Passionate about tech, coffee, and travel.',
    location: 'New York, USA',
    skills: ['JavaScript', 'React', 'Node.js', 'CSS'],
    education: 'BSc in Computer Science, Harvard University',
    work: 'Software Engineer at Tech Corp',
    phone: '+1 234 567 890',
    facebook: 'https://facebook.com/janedoe',
    twitter: 'https://twitter.com/janedoe',
    linkedin: 'https://linkedin.com/in/janedoe',
  };

  return <UserProfile user={otherUser} />;
};

export default Example;







// import React, { useContext } from 'react';
// import { FaUserCircle, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaGraduationCap, FaBriefcase, FaGlobe } from 'react-icons/fa';
// import { UserContext } from '../context'; // Assuming you're using UserContext for user state management

// const UserProfile = ({ user }) => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-8 lg:px-12">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
//         {/* Profile Header */}
//         <div className="flex justify-center items-center flex-col space-y-6">
//           {/* Profile Picture */}
//           <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
//             {user.profileImage ? (
//               <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center text-4xl text-white">
//                 <FaUserCircle />
//               </div>
//             )}
//           </div>

//           {/* User Info */}
//           <div className="text-center">
//             {/* Name */}
//             <h2 className="text-3xl font-semibold text-gray-800">{user.name}</h2>

//             {/* Email */}
//             <div className="flex items-center justify-center mt-2 text-gray-600">
//               <FaEnvelope className="mr-2 text-indigo-600" />
//               <span>{user.email}</span>
//             </div>

//             {/* Bio */}
//             {user.bio && (
//               <div className="mt-4 text-lg text-gray-600">
//                 <h3 className="font-semibold text-gray-800">Bio</h3>
//                 <p>{user.bio}</p>
//               </div>
//             )}

//             {/* Location */}
//             {user.location && (
//               <div className="mt-4 text-lg text-gray-600">
//                 <h3 className="font-semibold text-gray-800">Location</h3>
//                 <p>{user.location}</p>
//               </div>
//             )}
//           </div>

//           {/* Social Links */}
//           <div className="mt-6 flex justify-center space-x-6">
//             {user.facebook && (
//               <a href={user.facebook} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition duration-300">
//                 <FaFacebook size={24} />
//               </a>
//             )}
//             {user.twitter && (
//               <a href={user.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
//                 <FaTwitter size={24} />
//               </a>
//             )}
//             {user.linkedin && (
//               <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition duration-300">
//                 <FaLinkedin size={24} />
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Expanded User Info */}
//         <div className="mt-8">
//           {/* Skills or Expertise */}
//           {user.skills && user.skills.length > 0 && (
//             <div className="mb-8">
//               <h3 className="text-2xl font-semibold text-gray-800">Skills</h3>
//               <div className="flex flex-wrap gap-4 mt-4">
//                 {user.skills.map((skill, index) => (
//                   <span key={index} className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Education */}
//           {user.education && (
//             <div className="mb-8">
//               <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
//               <div className="flex items-center text-gray-600 mt-4">
//                 <FaGraduationCap className="mr-2 text-indigo-600" />
//                 <p>{user.education}</p>
//               </div>
//             </div>
//           )}

//           {/* Work Experience */}
//           {user.work && (
//             <div className="mb-8">
//               <h3 className="text-2xl font-semibold text-gray-800">Work Experience</h3>
//               <div className="flex items-center text-gray-600 mt-4">
//                 <FaBriefcase className="mr-2 text-indigo-600" />
//                 <p>{user.work}</p>
//               </div>
//             </div>
//           )}

//           {/* Website or Portfolio */}
//           {user.website && (
//             <div className="mb-8">
//               <h3 className="text-2xl font-semibold text-gray-800">Website/Portfolio</h3>
//               <div className="flex items-center text-gray-600 mt-4">
//                 <FaGlobe className="mr-2 text-indigo-600" />
//                 <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition duration-300">
//                   {user.website}
//                 </a>
//               </div>
//             </div>
//           )}

//           {/* Contact Info */}
//           {user.phone && (
//             <div className="mb-8">
//               <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
//               <div className="flex items-center text-gray-600 mt-4">
//                 <p>{user.phone}</p>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Follow Button */}
//         <div className="mt-8 flex justify-center">
//           <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
//             Follow
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Example usage: Render another user's profile page.
// const Example = () => {
//   const { state } = useContext(UserContext); // Assuming UserContext is providing the user state
//   const otherUser = {
//     name: 'Jane Doe',
//     email: 'janedoe@example.com',
//     profileImage: null, // Placeholder for profile image
//     bio: 'Passionate about tech, coffee, and travel.',
//     location: 'New York, USA',
//     skills: ['JavaScript', 'React', 'Node.js', 'CSS'],
//     education: 'BSc in Computer Science, Harvard University',
//     work: 'Software Engineer at Tech Corp',
//     website: 'https://janedoe.dev',
//     phone: '+1 234 567 890',
//     facebook: 'https://facebook.com/janedoe',
//     twitter: 'https://twitter.com/janedoe',
//     linkedin: 'https://linkedin.com/in/janedoe',
//   };

//   return <UserProfile user={otherUser} />;
// };

// export default Example;







// import React, { useContext } from 'react';
// import { FaUserCircle, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
// import { UserContext } from '../context';  // Assuming you're using UserContext for user state management

// const UserProfile = ({ user }) => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-8 lg:px-12">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
//         {/* Profile Header */}
//         <div className="flex justify-center items-center flex-col space-y-6">
//           {/* Profile Picture */}
//           <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
//             {user.profileImage ? (
//               <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center text-4xl text-white">
//                 <FaUserCircle />
//               </div>
//             )}
//           </div>

//           {/* User Info */}
//           <div className="text-center">
//             {/* Name */}
//             <h2 className="text-3xl font-semibold text-gray-800">{user.name}</h2>

//             {/* Email */}
//             <div className="flex items-center justify-center mt-2 text-gray-600">
//               <FaEnvelope className="mr-2 text-indigo-600" />
//               <span>{user.email}</span>
//             </div>

//             {/* Bio */}
//             {user.bio && (
//               <div className="mt-4 text-lg text-gray-600">
//                 <h3 className="font-semibold text-gray-800">Bio</h3>
//                 <p>{user.bio}</p>
//               </div>
//             )}

//             {/* Location */}
//             {user.location && (
//               <div className="mt-4 text-lg text-gray-600">
//                 <h3 className="font-semibold text-gray-800">Location</h3>
//                 <p>{user.location}</p>
//               </div>
//             )}
//           </div>

//           {/* Social Links */}
//           <div className="mt-6 flex justify-center space-x-6">
//             {user.facebook && (
//               <a href={user.facebook} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition duration-300">
//                 <FaFacebook size={24} />
//               </a>
//             )}
//             {user.twitter && (
//               <a href={user.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
//                 <FaTwitter size={24} />
//               </a>
//             )}
//             {user.linkedin && (
//               <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition duration-300">
//                 <FaLinkedin size={24} />
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Follow/Send Message Button */}
//         <div className="mt-8 flex justify-center">
//           <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
//             Follow
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Example usage: Render another user's profile page.
// const Example = () => {
//   const { state } = useContext(UserContext);  // Assuming UserContext is providing the user state
//   const otherUser = {
//     name: 'Jane Doe',
//     email: 'janedoe@example.com',
//     profileImage: null,  // Placeholder for profile image
//     bio: 'Passionate about tech, coffee, and travel.',
//     location: 'New York, USA',
//     facebook: 'https://facebook.com/janedoe',
//     twitter: 'https://twitter.com/janedoe',
//     linkedin: 'https://linkedin.com/in/janedoe',
//   };

//   return <UserProfile user={otherUser} />;
// };

// export default Example;





// import React, { useState, useContext } from 'react';
// import { FaUserCircle, FaCamera, FaLock, FaEnvelope, FaSave, FaSignOutAlt, FaTrashAlt } from 'react-icons/fa';
// import { UserContext } from '../context';  // Assuming you have UserContext for state management

// const ProfilePage = () => {
//     const { state, dispatch } = useContext(UserContext);
//     const [editingName, setEditingName] = useState(false);
//     const [editingEmail, setEditingEmail] = useState(false);
//     const [editingBio, setEditingBio] = useState(false);
//     const [editingLocation, setEditingLocation] = useState(false);
//     const [newName, setNewName] = useState(state?.user?.name || '');
//     const [newEmail, setNewEmail] = useState(state?.user?.email || '');
//     const [newBio, setNewBio] = useState(state?.user?.bio || '');
//     const [newLocation, setNewLocation] = useState(state?.user?.location || '');
//     const [facebook, setFacebook] = useState(state?.user?.facebook || '');
//     const [twitter, setTwitter] = useState(state?.user?.twitter || '');
//     const [linkedin, setLinkedin] = useState(state?.user?.linkedin || '');
//     const [oldPassword, setOldPassword] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [errors, setErrors] = useState('');

//     // Handle profile picture change (this is just a placeholder)
//     const handleProfilePicChange = () => {
//         alert('Profile picture updated!');
//     };

//     // Handle logout (This will depend on your auth system, e.g., clearing tokens)
//     const handleLogout = () => {
//         dispatch({ type: 'LOGOUT' });  // Assuming a logout action in the context
//         alert('Logged out');
//     };

//     // Handle password change
//     const handlePasswordChange = (e) => {
//         e.preventDefault();
//         if (newPassword !== confirmPassword) {
//             setErrors('Passwords do not match.');
//             return;
//         }
//         setErrors('');
//         alert('Password updated successfully!');
//     };

//     // Handle account deletion
//     const handleAccountDeletion = () => {
//         const confirmDelete = window.confirm('Are you sure you want to delete your account? This action is irreversible.');
//         if (confirmDelete) {
//             alert('Account deleted successfully.');
//             dispatch({ type: 'DELETE_ACCOUNT' });  // Assuming a delete account action
//         }
//     };

//     // Toggle editing on double-click
//     const toggleEdit = (field) => {
//         if (field === 'name') {
//             setEditingName(!editingName);
//         }
//         if (field === 'email') {
//             setEditingEmail(!editingEmail);
//         }
//         if (field === 'bio') {
//             setEditingBio(!editingBio);
//         }
//         if (field === 'location') {
//             setEditingLocation(!editingLocation);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0">
//                 {/* Profile Section */}
//                 <div className="flex-none w-64 h-64 bg-gray-200 rounded-full overflow-hidden relative">
//                     {state?.user?.profileImage ? (
//                         <img
//                             src={state.user.profileImage}
//                             alt="Profile"
//                             className="w-full h-full object-cover"
//                         />
//                     ) : (
//                         <div className="w-full h-full bg-gray-300 flex items-center justify-center text-4xl text-white">
//                             <FaUserCircle />
//                         </div>
//                     )}
//                     <button
//                         onClick={handleProfilePicChange}
//                         className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-500 transition duration-300"
//                     >
//                         <FaCamera className="text-xl" />
//                     </button>
//                 </div>

//                 {/* User Details Section */}
//                 <div className="flex-1 space-y-6 px-6 py-2">
//                     <div className="flex flex-col space-y-3">
//                         {/* Name */}
//                         <div onDoubleClick={() => toggleEdit('name')}>
//                             {editingName ? (
//                                 <input
//                                     type="text"
//                                     value={newName}
//                                     onChange={(e) => setNewName(e.target.value)}
//                                     className="bg-transparent text-3xl font-semibold w-full focus:outline-none"
//                                 />
//                             ) : (
//                                 <h2 className="text-3xl font-semibold text-gray-800">{newName}</h2>
//                             )}
//                         </div>

//                         {/* Email */}
//                         <div onDoubleClick={() => toggleEdit('email')}>
//                             {editingEmail ? (
//                                 <input
//                                     type="email"
//                                     value={newEmail}
//                                     onChange={(e) => setNewEmail(e.target.value)}
//                                     className="bg-transparent text-lg w-full focus:outline-none"
//                                 />
//                             ) : (
//                                 <div className="flex items-center text-lg text-gray-600">
//                                     <FaEnvelope className="mr-2" />
//                                     <span>{newEmail}</span>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Bio */}
//                         <div className="space-y-2">
//                             <div className="font-semibold text-gray-800">Bio</div>
//                             <div onDoubleClick={() => toggleEdit('bio')}>
//                                 {editingBio ? (
//                                     <textarea
//                                         value={newBio}
//                                         onChange={(e) => setNewBio(e.target.value)}
//                                         className="bg-transparent text-lg w-full focus:outline-none resize-none"
//                                         rows="4"
//                                     />
//                                 ) : (
//                                     <p className="text-gray-600">{newBio || 'No bio available.'}</p>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Location */}
//                         <div className="space-y-2">
//                             <div className="font-semibold text-gray-800">Location</div>
//                             <div onDoubleClick={() => toggleEdit('location')}>
//                                 {editingLocation ? (
//                                     <input
//                                         type="text"
//                                         value={newLocation}
//                                         onChange={(e) => setNewLocation(e.target.value)}
//                                         className="bg-transparent text-lg w-full focus:outline-none"
//                                     />
//                                 ) : (
//                                     <p className="text-gray-600">{newLocation || 'Location not set.'}</p>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Social Links */}
//                         <div className="space-y-2">
//                             <div className="font-semibold text-gray-800">Social Links</div>
//                             <div className="flex space-x-4">
//                                 <input
//                                     type="text"
//                                     value={facebook}
//                                     onChange={(e) => setFacebook(e.target.value)}
//                                     placeholder="Facebook URL"
//                                     className="bg-transparent text-lg w-full focus:outline-none"
//                                 />
//                                 <input
//                                     type="text"
//                                     value={twitter}
//                                     onChange={(e) => setTwitter(e.target.value)}
//                                     placeholder="Twitter URL"
//                                     className="bg-transparent text-lg w-full focus:outline-none"
//                                 />
//                                 <input
//                                     type="text"
//                                     value={linkedin}
//                                     onChange={(e) => setLinkedin(e.target.value)}
//                                     placeholder="LinkedIn URL"
//                                     className="bg-transparent text-lg w-full focus:outline-none"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Password Section */}
//                     <div className="mt-12">
//                         <h3 className="text-2xl font-semibold text-gray-800">Change Password</h3>
//                         <form onSubmit={handlePasswordChange} className="space-y-4 mt-4">
//                             {errors && <div className="text-red-500 text-sm">{errors}</div>}
//                             <div>
//                                 <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">Old Password</label>
//                                 <input
//                                     type="password"
//                                     id="oldPassword"
//                                     value={oldPassword}
//                                     onChange={(e) => setOldPassword(e.target.value)}
//                                     className="bg-gray-100 py-3 px-4 rounded-full w-full text-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500"
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
//                                 <input
//                                     type="password"
//                                     id="newPassword"
//                                     value={newPassword}
//                                     onChange={(e) => setNewPassword(e.target.value)}
//                                     className="bg-gray-100 py-3 px-4 rounded-full w-full text-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500"
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
//                                 <input
//                                     type="password"
//                                     id="confirmPassword"
//                                     value={confirmPassword}
//                                     onChange={(e) => setConfirmPassword(e.target.value)}
//                                     className="bg-gray-100 py-3 px-4 rounded-full w-full text-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500"
//                                     required
//                                 />
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full bg-indigo-600 text-white py-3 px-4 mt-6 rounded-full hover:bg-indigo-700 transition duration-300"
//                             >
//                                 <FaLock className="mr-2" />
//                                 Update Password
//                             </button>
//                         </form>
//                     </div>

//                     {/* Account Deletion */}
//                     <div className="mt-8 text-center">
//                         <button
//                             onClick={handleAccountDeletion}
//                             className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
//                         >
//                             <FaTrashAlt className="mr-2" />
//                             Delete Account
//                         </button>
//                     </div>

//                     {/* Logout Button */}
//                     <div className="mt-8 text-center">
//                         <button
//                             onClick={handleLogout}
//                             className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
//                         >
//                             <FaSignOutAlt className="mr-2" />
//                             Logout
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;
