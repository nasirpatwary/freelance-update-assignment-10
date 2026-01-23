import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEdit2, FiMail, FiMapPin, FiCalendar, FiShield, FiUser, FiPhone, FiInfo } from 'react-icons/fi';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
    <title>User Profile | Dashboard</title>
    <div className="text-slate-900 dark:text-slate-300 p-4 md:p-10 w-full transition-colors duration-300">
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        variants={fadeIn}
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* --- Top Profile Header Card --- */}
        <div className="relative overflow-hidden bg-white dark:bg-[#1e293b] rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full -mr-20 -mt-20"></div>
          
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-500/30 p-1 shadow-2xl">
                <img 
                  src={user?.photoURL || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} 
                  alt="User" 
                  className="w-full h-full rounded-full bg-slate-100 dark:bg-[#0f172a] object-cover"
                />
              </div>
              <button className="absolute bottom-2 right-2 bg-indigo-600 p-2 rounded-full hover:bg-indigo-500 transition-colors shadow-lg border-2 border-white dark:border-[#1e293b]">
                <FiEdit2 size={16} className="text-white" />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <h1 className="text-3xl md:text-4xl font-bold dark:text-white">{user?.displayName || "User Name"}</h1>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full border border-indigo-200 dark:border-indigo-500/30 uppercase tracking-widest">
                  Member
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mt-2 flex items-center justify-center md:justify-start gap-2">
                <FiMail className="text-indigo-500" /> {user?.email}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <div className="bg-slate-50 dark:bg-[#0f172a] px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
                  <p className="text-[10px] text-slate-500 dark:text-slate-500 uppercase font-bold tracking-tighter">Joined</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Jan 2024</p>
                </div>
                <div className="bg-slate-50 dark:bg-[#0f172a] px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
                  <p className="text-[10px] text-slate-500 dark:text-slate-500 uppercase font-bold tracking-tighter">Account Status</p>
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> Verified
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="px-8 py-3 bg-indigo-600 text-white dark:bg-white dark:text-slate-900 rounded-2xl font-bold hover:bg-indigo-700 dark:hover:bg-slate-200 transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
            >
              {isEditing ? 'Save Profile' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {/* --- Form Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div variants={fadeIn} className="bg-white dark:bg-[#1e293b] p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold dark:text-white mb-8 flex items-center gap-2">
                <FiUser className="text-indigo-500" /> Personal Information
              </h3>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { label: "Full Name", value: user?.displayName, icon: <FiUser />, type: "text" },
                  { label: "Email Address", value: user?.email, icon: <FiMail />, type: "email", disabled: true },
                  { label: "Phone Number", value: "+1 (555) 000-0000", icon: <FiPhone />, type: "tel" },
                  { label: "Location", value: "Dhaka, Bangladesh", icon: <FiMapPin />, type: "text" },
                  { label: "Birth Date", value: "1998-05-15", icon: <FiCalendar />, type: "date" },
                  { label: "Profession", value: "Full-Stack Developer", icon: <FiInfo />, type: "text" },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">{item.label}</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                        {item.icon}
                      </div>
                      <input 
                        type={item.type}
                        disabled={item.disabled || !isEditing}
                        defaultValue={item.value}
                        className={`w-full bg-slate-50 dark:bg-[#0f172a] border ${isEditing && !item.disabled ? 'border-indigo-500 ring-2 ring-indigo-500/10' : 'border-slate-200 dark:border-slate-800'} rounded-2xl py-4 pl-12 pr-4 outline-none transition-all text-slate-700 dark:text-slate-200 disabled:opacity-60 disabled:cursor-not-allowed`}
                      />
                    </div>
                  </div>
                ))}

                {/* Bio Field (Full Width) */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">About Bio</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-5 text-slate-400 group-focus-within:text-indigo-500">
                      <FiEdit2 />
                    </div>
                    <textarea 
                      rows="4"
                      disabled={!isEditing}
                      defaultValue="Hello! I am a passionate developer who loves building interactive web applications with React and Tailwind CSS."
                      className={`w-full bg-slate-50 dark:bg-[#0f172a] border ${isEditing ? 'border-indigo-500 ring-2 ring-indigo-500/10' : 'border-slate-200 dark:border-slate-800'} rounded-2xl py-4 pl-12 pr-4 outline-none transition-all text-slate-700 dark:text-slate-200 resize-none`}
                    ></textarea>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

          {/* --- Sidebar Section --- */}
          <div className="space-y-6">
            <motion.div variants={fadeIn} className="bg-white dark:bg-[#1e293b] p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold dark:text-white mb-6 flex items-center gap-2">
                <FiShield className="text-emerald-500" /> Account Privacy
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-[#0f172a] rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div>
                    <p className="text-sm font-semibold dark:text-slate-200">2FA Security</p>
                    <p className="text-[11px] text-slate-500">Protection active</p>
                  </div>
                  <div className="w-10 h-5 bg-emerald-500/20 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <button className="w-full py-3 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  Reset Password
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-indigo-600 p-8 rounded-3xl shadow-xl shadow-indigo-500/20 text-white relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 duration-500 opacity-10 group-hover:scale-110 transition-transform">
                <FiShield size={120} />
              </div>
              <h3 className="text-xl font-bold mb-2">Pro Subscription</h3>
              <p className="text-indigo-100 text-sm mb-6 relative z-10">Your plan expires in 45 days. Renew now to keep exclusive features.</p>
              <button className="w-full py-3 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-indigo-50 transition-all relative z-10">
                Upgrade Plan
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default UserProfile;