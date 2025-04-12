import { FaAward, FaBook, FaGraduationCap, FaMoneyBillWave, FaCalendarAlt, FaClipboardCheck, FaBalanceScale } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ScholarshipRulesPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const rules = [
    {
      icon: <FaGraduationCap className="text-blue-600 text-2xl" />,
      title: "Academic Excellence",
      description: "Minimum GPA of 3.5 on a 4.0 scale or equivalent in the previous academic year. Students must maintain full-time enrollment status."
    },
    {
      icon: <FaMoneyBillWave className="text-blue-600 text-2xl" />,
      title: "Financial Need",
      description: "Applicants must demonstrate financial need through submission of verified financial documents. Priority given to students from low-income families."
    },
    {
      icon: <FaBook className="text-blue-600 text-2xl" />,
      title: "Field of Study",
      description: "Certain scholarships are restricted to specific fields of study. Applicants must be enrolled in or accepted to an eligible degree program."
    },
    {
      icon: <FaCalendarAlt className="text-blue-600 text-2xl" />,
      title: "Application Timeline",
      description: "Applications must be submitted by March 31st for the upcoming academic year. Late submissions will not be considered."
    },
    {
      icon: <FaClipboardCheck className="text-blue-600 text-2xl" />,
      title: "Documentation Requirements",
      description: "Complete application package includes: transcripts, two recommendation letters, personal statement, and financial documents."
    },
    {
      icon: <FaBalanceScale className="text-blue-600 text-2xl" />,
      title: "Renewal Criteria",
      description: "Scholarships are renewable annually provided the recipient maintains a 3.3 GPA and completes 30 hours of community service per year."
    }
  ];

  const terms = [
    "Scholarship funds are applied directly to tuition and fees first, with any remainder disbursed to the student",
    "Award amounts may vary based on available funding and number of qualified applicants",
    "Recipients must notify the scholarship committee of any changes in enrollment status",
    "Scholarships may be revoked for academic misconduct or violation of institution policies",
    "Decisions of the scholarship committee are final and not subject to appeal"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-700 p-6 text-white">
          <div className="flex items-center justify-center space-x-4">
            <FaAward className="text-4xl" />
            <div>
              <h1 className="text-3xl font-bold">Scholarship Awarding Rules</h1>
              <p className="mt-2 opacity-90">Guidelines and requirements for academic scholarships</p>
              <div className="mt-2 opacity-90">
</div>

            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Eligibility Criteria
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {rules.map((rule, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                      {rule.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{rule.title}</h3>
                      <p className="mt-2 text-gray-600">{rule.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Selection Process
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                  <span className="text-blue-700 font-medium">1</span>
                </div>
                <p className="text-gray-700">
                  <strong>Initial Screening:</strong> Applications are reviewed for completeness and basic eligibility requirements.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                  <span className="text-blue-700 font-medium">2</span>
                </div>
                <p className="text-gray-700">
                  <strong>Committee Review:</strong> Qualified applications are evaluated by the scholarship committee based on merit and need.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                  <span className="text-blue-700 font-medium">3</span>
                </div>
                <p className="text-gray-700">
                  <strong>Interviews:</strong> Top candidates may be invited for interviews (for certain competitive scholarships).
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                  <span className="text-blue-700 font-medium">4</span>
                </div>
                <p className="text-gray-700">
                  <strong>Final Decision:</strong> Award notifications are sent by May 15th each year.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Terms and Conditions
            </h2>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              {terms.map((term, index) => (
                <li key={index} className="leading-relaxed">{term}</li>
              ))}
            </ul>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-lg font-medium text-blue-800 mb-3">Important Notes</h3>
              <p className="text-blue-700">
                Scholarship recipients are required to attend the annual awards ceremony and may be asked to participate in donor recognition events. Failure to maintain satisfactory academic progress will result in scholarship termination.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-8 py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              For questions, contact: <a href="mailto:scholarships@university.edu" className="text-blue-600 hover:underline">scholarships@university.edu</a>
            </p>
            <button onClick={()=>navigate("/personal")}  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipRulesPage;
