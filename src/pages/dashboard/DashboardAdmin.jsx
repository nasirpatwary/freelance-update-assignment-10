import { motion } from "framer-motion";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useRole } from "../../hooks/useUserFuntionalty";

const ProfileDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { role } = useRole();
  const { user } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  return (
    <>
    <title>Admin Profle | Dashboard</title>
    <div className="text-slate-900 dark:text-slate-200 p-4 md:p-8 transition-colors duration-300">
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <header className="mb-8 space-y-4 md:flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Account Settings</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your public profile and account details.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEditing(!isEditing)}
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </motion.button>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Avatar & Quick Stats */}
          <motion.div variants={containerVariants} className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-[#161d31] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center shadow-sm dark:shadow-2xl">
              <div className="relative group">
                <img 
                  src={user?.photoURL || "https://via.placeholder.com/150"} 
                  alt="Avatar" 
                  className="w-32 h-32 rounded-3xl border-4 border-white dark:border-[#1e293b] object-cover bg-slate-100 dark:bg-[#0f172a] shadow-md"
                />
                {role === "admin" && (
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-wider shadow-md">
                    {role}
                  </span>
                )}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{user?.displayName || "User Name"}</h2>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">Full Stack Developer</p>
              
              <div className="mt-6 w-full pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-around">
                <div className="text-center">
                  <p className="text-xl font-bold text-slate-900 dark:text-white">12</p>
                  <p className="text-xs text-slate-500 uppercase font-semibold">Projects</p>
                </div>
                <div className="border-x border-slate-100 dark:border-slate-800 px-6 text-center">
                  <p className="text-xl font-bold text-slate-900 dark:text-white">84</p>
                  <p className="text-xs text-slate-500 uppercase font-semibold">Tasks</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-slate-900 dark:text-white">2.4k</p>
                  <p className="text-xs text-slate-500 uppercase font-semibold">Points</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Forms */}
          <motion.div variants={containerVariants} className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-[#161d31] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-2xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    disabled={!isEditing}
                    defaultValue={user?.displayName}
                    className={`w-full bg-slate-50 dark:bg-[#0f172a] border ${isEditing ? 'border-indigo-500 ring-2 ring-indigo-500/10' : 'border-slate-200 dark:border-slate-800'} rounded-2xl p-4 outline-none transition-all dark:text-white`}
                  />
                </div>
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    disabled 
                    value={user?.email}
                    className="w-full bg-slate-100 dark:bg-[#0b0f1a] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-slate-500 cursor-not-allowed"
                  />
                </div>
                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1">Phone Number</label>
                  <input 
                    type="text" 
                    disabled={!isEditing}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full bg-slate-50 dark:bg-[#0f172a] border ${isEditing ? 'border-indigo-500 ring-2 ring-indigo-500/10' : 'border-slate-200 dark:border-slate-800'} rounded-2xl p-4 outline-none transition-all dark:text-white`}
                  />
                </div>
                {/* Location */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1">Location</label>
                  <input 
                    type="text" 
                    disabled={!isEditing}
                    defaultValue="New York, USA"
                    className={`w-full bg-slate-50 dark:bg-[#0f172a] border ${isEditing ? 'border-indigo-500 ring-2 ring-indigo-500/10' : 'border-slate-200 dark:border-slate-800'} rounded-2xl p-4 outline-none transition-all dark:text-white`}
                  />
                </div>
              </div>
            </div>

            {/* Admin Management Panel */}
            {role === "admin" && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="bg-indigo-50 dark:bg-indigo-600/10 rounded-3xl p-6 border border-indigo-100 dark:border-indigo-500/20"
              >
                <div className="flex flex-wrap justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-indigo-900 dark:text-white">Admin Privileges</h3>
                  <span className="bg-indigo-600 text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter">System Manager</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <AdminToolCard title="Users" desc="Manage 1.2k Users" color="indigo" />
                  <AdminToolCard title="Server" desc="Status: Healthy" color="emerald" />
                  <AdminToolCard title="Reports" desc="12 New Alerts" color="rose" />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

// Sub-component for Admin Tools
const AdminToolCard = ({ title, desc, color }) => {
  const colors = {
    indigo: "text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700",
    emerald: "text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700",
    rose: "text-rose-600 dark:text-rose-400 group-hover:text-rose-700",
  };

  return (
    <div className="bg-white dark:bg-[#161d31] p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-all group shadow-sm">
      <p className={`text-xs font-black uppercase mb-1 ${colors[color]}`}>{title}</p>
      <p className="text-slate-700 dark:text-white font-medium text-sm">{desc}</p>
    </div>
  );
};

export default ProfileDashboard;