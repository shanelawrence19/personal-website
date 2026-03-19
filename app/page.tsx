"use client";

import { Github, Linkedin, Mail, ExternalLink, TrendingUp, Award, Zap } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const skillsData = [
  { month: "Jan", proficiency: 60 },
  { month: "Feb", proficiency: 72 },
  { month: "Mar", proficiency: 68 },
  { month: "Apr", proficiency: 82 },
  { month: "May", proficiency: 88 },
  { month: "Jun", proficiency: 95 },
];

const projectsPerformance = [
  { quarter: "Q1", completed: 2 },
  { quarter: "Q2", completed: 3 },
  { quarter: "Q3", completed: 4 },
  { quarter: "Q4", completed: 5 },
];

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section with Market Style */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-green-500/10 to-cyan-500/10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 flex flex-col items-center gap-y-8 text-center"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-cyan-300">Portfolio Status: Active</span>
              </div>
              <h1 className="gradient-text text-5xl font-bold md:text-6xl">
                Gregory Shane Lawrence
              </h1>
              <p className="text-xl text-slate-300">
                Software Engineer | Machine Learning | Data Science & Quant Analysis
              </p>
            </div>
          </motion.div>

          {/* Market Overview Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Projects Completed</div>
                  <div className="mt-2 text-3xl font-bold text-green-400">6+</div>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500/30" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-lg"
            >
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">ML & AI Projects</div>
                <div className="mt-2 text-3xl font-bold text-cyan-400">4+</div>
                <div className="mt-1 text-xs text-slate-400">Deep Learning</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-lg"
            >
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Programming Languages</div>
                <div className="mt-2 text-3xl font-bold text-blue-400">8+</div>
                <div className="mt-1 text-xs text-slate-400">C plus plus, Java, Python, TS</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-lg"
            >
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Graduating</div>
                <div className="mt-2 text-3xl font-bold text-emerald-400">May 2026</div>
                <div className="mt-1 text-xs text-slate-400">Penn State University</div>
              </div>
            </motion.div>
          </div>


        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-slate-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-4xl font-bold">Executive Summary</h2>
          <p className="mb-12 text-slate-400">Graduating May 2026 from Penn State with deep expertise in ML and backend systems</p>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg leading-relaxed text-slate-300">
                Software Engineering student at Penn State University graduating May 2026. Strong foundation in machine learning, data science, quantitative analysis, and backend architecture. Designed and implemented end-to-end systems from cloud IAM analysis to facial reconstruction models and data-driven applications using cutting-edge ML and statistical frameworks.
              </p>
              <p className="text-lg leading-relaxed text-slate-300">
                Focused on solving complex problems through data science, machine learning, and backend infrastructure. Experience building production-ready systems with Python, NestJS, and cloud platforms. Passionate about ML applications in computer vision, quantitative analysis, statistical modeling, and data-driven insights.
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Deep Learning & Computer Vision</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-cyan-400" />
                  <span className="text-slate-300">Scalable Backend Architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-purple-400" />
                  <span className="text-slate-300">Data Science & Quantitative Analysis</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-900/50 to-slate-900/20 p-8 backdrop-blur-lg"
            >
              <h3 className="mb-6 text-lg font-semibold text-cyan-400">Core Competencies</h3>
              <div className="space-y-4">
                <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                  <div className="text-sm font-medium text-slate-300">Education</div>
                  <ul className="mt-2 space-y-1 text-sm text-slate-400">
                    <li>• Penn State: BS Software Engineering (May 2026)</li>
                    <li>• Sungkyunkwan University: Data Science Exchange</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                  <div className="text-sm font-medium text-slate-300">Key Areas</div>
                  <ul className="mt-2 space-y-1 text-sm text-slate-400">
                    <li>• Machine Learning & Data Science</li>
                    <li>• Quantitative Analysis & Statistical Modeling</li>
                    <li>• Backend Systems & Infrastructure</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Portfolio Assets */}
      <section id="projects" className="border-t border-slate-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-4xl font-bold">Featured Projects</h2>
          <p className="mb-12 text-slate-400">Selected highlights and key deliverables</p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Project 1 - IAM Analyzer */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-900/50 p-6 backdrop-blur-lg transition-all"
            >
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-red-500/5">
                <div className="h-2 w-2 rounded-full bg-red-400 animate-pulse"></div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-cyan-400 mb-1">
                  Cloud Security: IAM Attack Path Analyzer
                </h3>
                <p className="text-xs text-slate-500">Aug 2025 - Nov 2025</p>
              </div>
              <p className="mb-4 text-sm text-slate-400">
                Standalone Python tool that parses IAM and CloudFormation exports into a permission graph, visualizes access relationships, and discovers attack paths with risk scoring.
              </p>
              <div className="mb-4">
                <div className="h-1 rounded-full bg-slate-700">
                  <div className="h-1 w-full rounded-full bg-red-500"></div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 - Career Fair App */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-900/50 p-6 backdrop-blur-lg transition-all"
            >
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-cyan-400 mb-1">
                  App Development Capstone: Career Fair App
                </h3>
                <p className="text-xs text-slate-500">Aug 2025 - Present</p>
              </div>
              <p className="mb-4 text-sm text-slate-400">
                Designing backend architecture for university career fair system. Building NestJS + TypeScript backend with PostgreSQL, CSV import/validation for 150+ companies, and grid-based map generation.
              </p>
              <div className="mb-4">
                <div className="h-1 rounded-full bg-slate-700">
                  <div className="h-1 w-full rounded-full bg-green-500"></div>
                </div>
              </div>
            </motion.div>

            {/* Project 3 -  Facial Reconstruction */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-900/50 p-6 backdrop-blur-lg transition-all"
            >
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/5">
                <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-cyan-400 mb-1">
                  Facial Reconstruction Model
                </h3>
                <p className="text-xs text-slate-500">Mar 2025 - Jun 2025 · Seoul, South Korea</p>
              </div>
              <p className="mb-4 text-sm text-slate-400">
                Dual-encoder transformer-based face restoration model for low-to-high resolution reconstruction. Evaluated transformers beyond NLP and trained on custom vision datasets with PyTorch.
              </p>
              <div className="mb-4">
                <div className="h-1 rounded-full bg-slate-700">
                  <div className="h-1 w-full rounded-full bg-purple-500"></div>
                </div>
              </div>
            </motion.div>

            {/* Project 4 - Neural Network tSNE */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-900/50 p-6 backdrop-blur-lg transition-all"
            >
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5">
                <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-cyan-400 mb-1">
                  Neural Network Recreation of tSNE
                </h3>
                <p className="text-xs text-slate-500">Aug 2024 - Dec 2024</p>
              </div>
              <p className="mb-4 text-sm text-slate-400">
                Parametric neural network approximation of t-SNE for dimensionality reduction. Five-layer network trained on MNIST with custom KL divergence variant for neighborhood approximation.
              </p>
              <div className="mb-4">
                <div className="h-1 rounded-full bg-slate-700">
                  <div className="h-1 w-full rounded-full bg-blue-500"></div>
                </div>
              </div>
            </motion.div>

            {/* Project 5 - Restaurant App */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-900/50 p-6 backdrop-blur-lg transition-all"
            >
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-orange-500/5">
                <div className="h-2 w-2 rounded-full bg-orange-400 animate-pulse"></div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-cyan-400 mb-1">
                  Restaurant Mobile App
                </h3>
                <p className="text-xs text-slate-500">Aug 2024 - Dec 2024</p>
              </div>
              <p className="mb-4 text-sm text-slate-400">
                Android proof-of-concept delivery app built in Kotlin. Implemented points-based loyalty system, local file-based database, and MVC architecture in a 3-person team with Git collaboration.
              </p>
              <div className="mb-4">
                <div className="h-1 rounded-full bg-slate-700">
                  <div className="h-1 w-full rounded-full bg-orange-500"></div>
                </div>
              </div>
            </motion.div>

            {/* Project 6 - Data Bias Research */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-900/50 p-6 backdrop-blur-lg transition-all"
            >
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-indigo-500/5">
                <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-cyan-400 mb-1">
                  Data Bias in Machine Learning
                </h3>
                <p className="text-xs text-slate-500">Nov 2023 - Apr 2024 · Engineering Research</p>
              </div>
              <p className="mb-4 text-sm text-slate-400">
                Exploratory research on NLP model bias. Reviewed bias mitigation frameworks and investigated knowledge graph integration for fairness-aware decisions and bias reduction.
              </p>
              <div className="mb-4">
                <div className="h-1 rounded-full bg-slate-700">
                  <div className="h-1 w-full rounded-full bg-indigo-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section - Technology Allocation */}
      <section id="skills" className="border-t border-slate-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-4xl font-bold">Technology Stack</h2>
          <p className="mb-12 text-slate-400">Core competencies and expertise allocation</p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <span className="text-xs font-bold text-cyan-400">L</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400">Languages</h3>
              </div>
              <div className="mb-4">
                <div className="h-2 rounded-full bg-slate-700">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    style={{ width: `100%` }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Python" },
                  { name: "SQL" },
                  { name: "C" },
                  { name: "TypeScript" },
                  { name: "C++" },
                  { name: "Java" },
                  { name: "Kotlin" },
                  { name: "Swift" },
                  { name: "MIPs Assembly" },
                  { name: "Bash" },
                ].map((skill) => (
                  <div key={skill.name} className="text-xs text-slate-400">
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ML & Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                  <span className="text-xs font-bold text-green-400">D</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400">Data Science & Analytics</h3>
              </div>
              <div className="mb-4">
                <div className="h-2 rounded-full bg-slate-700">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                    style={{ width: `100%` }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { name: "PyTorch" },
                  { name: "TensorFlow" },
                  { name: "Scikit-learn" },
                  { name: "SciPy" },
                  { name: "Pandas" },
                  { name: "NumPy" },
                  { name: "Jupyter" },
                  { name: "Matplotlib" },
                  { name: "Plotly" },
                  { name: "Statsmodels" },
                  { name: "XGBoost" },
                  { name: "LightGBM" },
                ].map((skill) => (
                  <div key={skill.name} className="text-xs text-slate-400">
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Infrastructure & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <span className="text-xs font-bold text-purple-400">I</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400">Infrastructure & Tools</h3>
              </div>
              <div className="mb-4">
                <div className="h-2 rounded-full bg-slate-700">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `100%` }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { name: "PostgreSQL" },
                  { name: "SQLite" },
                  { name: "Git" },
                  { name: "GitHub" },
                  { name: "Statistical Analysis" },
                  { name: "Data Modeling" },
                  { name: "Data Visualization" },
                  { name: "AWS" },
                  { name: "Azure" },
                ].map((skill) => (
                  <div key={skill.name} className="text-xs text-slate-400">
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-slate-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-4xl font-bold">Let's Connect</h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://www.linkedin.com/in/shane-lawrence-520083251/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 transition-all hover:border-blue-500 hover:bg-blue-500/10"
            >
              <Linkedin className="h-5 w-5 text-blue-400" />
              <span className="font-medium text-slate-50">LinkedIn</span>
            </a>
            <a
              href="https://github.com/shanelawrence19"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 transition-all hover:border-cyan-500 hover:bg-cyan-500/10"
            >
              <Github className="h-5 w-5 text-cyan-400" />
              <span className="font-medium text-slate-50">GitHub</span>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
