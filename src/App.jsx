import React, { useState, useEffect } from 'react';
import { Bell, TrendingUp, Users, Calendar, HelpCircle, ChevronDown, ChevronRight, Award, User, CreditCard, Zap, MessageCircle, Clock, AlertCircle, Target, CheckCircle, BarChart2, Volume2 } from 'lucide-react';

export default function GromoDashboard() {
  const [userName, setUserName] = useState('Rajesh Kumar');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showJargonBuster, setShowJargonBuster] = useState(false);
  const [selectedJargon, setSelectedJargon] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expandedCard, setExpandedCard] = useState(null);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const jargonExplanations = {
    'ULIP': {
      simple: 'A product that gives both insurance and investment benefits',
      detail: 'Unit Linked Insurance Plan - combines life insurance with investment in market funds',
      example: 'Like buying protection for your family while also growing your money in the market'
    },
    'Term Insurance': {
      simple: 'Pure life insurance that protects family if something happens to you',
      detail: 'Provides coverage for a specific period with regular premium payments',
      example: 'Pay ₹10,000/year to ensure your family gets ₹1 crore if you are no longer there'
    },
    'Credit Score': {
      simple: 'A number that shows how good you are at repaying loans',
      detail: 'Rating between 300-900 that banks check before giving loans',
      example: 'Higher score (>750) helps get loans easily and at lower interest rates'
    }
  };

  const showJargonExplanation = (term) => {
    setSelectedJargon(term);
    setShowJargonBuster(true);
  };

  const smartLeads = [
    { 
      name: 'Amit Sharma', 
      product: 'Term Insurance', 
      likelihood: '92%', 
      note: 'Previously bought mutual funds',
      status: 'Hot Lead',
      bestTime: '6:00 PM - 8:00 PM',
      lastContact: '2 days ago',
      tip: 'Mention family security benefits first'
    },
    { 
      name: 'Priya Patel', 
      product: 'ULIP', 
      likelihood: '87%', 
      note: 'Looking for tax saving + investment',
      status: 'Follow Up',
      bestTime: '11:00 AM - 1:00 PM',
      lastContact: '5 days ago',
      tip: 'Explain tax benefits under Section 80C'
    },
    { 
      name: 'Deepak Verma', 
      product: 'Credit Card', 
      likelihood: '78%', 
      note: 'Recent salary increment',
      status: 'New Lead',
      bestTime: '9:00 AM - 11:00 AM',
      lastContact: 'Not contacted yet',
      tip: 'Highlight no-fee first year offer'
    }
  ];

  const dailyGoals = {
    calls: { target: 15, completed: 8 },
    meetings: { target: 3, completed: 1 },
    proposals: { target: 5, completed: 3 }
  };

  const earnings = {
    today: '₹1,200',
    thisWeek: '₹8,500',
    pending: '₹12,400',
    thisMonth: '₹32,000'
  };

  const statusClasses = {
    'Hot Lead': 'bg-red-100 text-red-800',
    'Follow Up': 'bg-yellow-100 text-yellow-800',
    'New Lead': 'bg-blue-100 text-blue-800',
    'Converted': 'bg-green-100 text-green-800'
  };

  const toggleCard = (cardName) => {
    if (expandedCard === cardName) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardName);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-green-500">gromo</div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full bg-gray-100">
              <Bell size={20} className="text-gray-600" />
            </button>
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium">
              {userName.charAt(0)}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{getGreeting()}, {userName.split(' ')[0]}!</h1>
          <p className="text-gray-600">Here's your personalized dashboard for {currentTime.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' })}</p>
        </div>

        {/* Performance Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-500">Today's Earnings</div>
              <TrendingUp size={18} className="text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{earnings.today}</div>
            <div className="text-xs text-gray-500 mt-1">+₹500 from yesterday</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-500">This Week</div>
              <Users size={18} className="text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{earnings.thisWeek}</div>
            <div className="text-xs text-gray-500 mt-1">68% of weekly target</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-500">Pending Payout</div>
              <Calendar size={18} className="text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{earnings.pending}</div>
            <div className="text-xs text-gray-500 mt-1">Expected by 28th May</div>
          </div>
        </div>

        {/* Smart Leads Section */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleCard('smartLeads')}
          >
            <div className="flex items-center">
              <Zap size={20} className="text-yellow-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">Smart Leads</h2>
            </div>
            {expandedCard === 'smartLeads' ? <ChevronDown size={20} className="text-gray-400" /> : <ChevronRight size={20} className="text-gray-400" />}
          </div>
          
          {expandedCard === 'smartLeads' && (
            <div className="px-4 pb-4">
              <p className="text-sm text-gray-600 mb-4">These leads are personalized based on your sales history and market trends.</p>
              
              <div className="space-y-4">
                {smartLeads.map((lead, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-3 hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-gray-800">{lead.name}</h3>
                        <div className="flex items-center mt-1">
                          <span 
                            className="text-sm cursor-pointer text-blue-600 underline"
                            onClick={() => showJargonExplanation(lead.product)}
                          >
                            {lead.product}
                          </span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">{lead.likelihood} match</span>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${statusClasses[lead.status]}`}>
                        {lead.status}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-600 mt-1">{lead.note}</div>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock size={14} className="mr-1" />
                        Best time: {lead.bestTime}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <MessageCircle size={14} className="mr-1" />
                        Last contact: {lead.lastContact}
                      </div>
                    </div>
                    
                    <div className="mt-3 bg-blue-50 p-2 rounded-md flex items-start">
                      <Zap size={16} className="text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-blue-700">{lead.tip}</span>
                    </div>
                    
                    <div className="mt-3 flex space-x-2">
                      <button className="px-3 py-1.5 bg-green-500 text-white text-sm rounded-md flex-1">Call Now</button>
                      <button className="px-3 py-1.5 border border-gray-300 text-gray-600 text-sm rounded-md flex-1">Schedule</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Daily Goals */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleCard('dailyGoals')}
          >
            <div className="flex items-center">
              <Target size={20} className="text-red-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">Daily Goals</h2>
            </div>
            {expandedCard === 'dailyGoals' ? <ChevronDown size={20} className="text-gray-400" /> : <ChevronRight size={20} className="text-gray-400" />}
          </div>
          
          {expandedCard === 'dailyGoals' && (
            <div className="px-4 pb-4">
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Calls</span>
                  <span className="text-sm text-gray-600">{dailyGoals.calls.completed}/{dailyGoals.calls.target}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{width: `${(dailyGoals.calls.completed / dailyGoals.calls.target) * 100}%`}}
                  ></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Meetings</span>
                  <span className="text-sm text-gray-600">{dailyGoals.meetings.completed}/{dailyGoals.meetings.target}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full" 
                    style={{width: `${(dailyGoals.meetings.completed / dailyGoals.meetings.target) * 100}%`}}
                  ></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Proposals</span>
                  <span className="text-sm text-gray-600">{dailyGoals.proposals.completed}/{dailyGoals.proposals.target}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{width: `${(dailyGoals.proposals.completed / dailyGoals.proposals.target) * 100}%`}}
                  ></div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-md flex items-start mt-2">
                <AlertCircle size={16} className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-yellow-700">
                  You typically achieve 80% of your goals after 4pm. Consider making more calls in the morning to stay ahead!
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Performance Insights */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleCard('insights')}
          >
            <div className="flex items-center">
              <BarChart2 size={20} className="text-purple-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">Performance Insights</h2>
            </div>
            {expandedCard === 'insights' ? <ChevronDown size={20} className="text-gray-400" /> : <ChevronRight size={20} className="text-gray-400" />}
          </div>
          
          {expandedCard === 'insights' && (
            <div className="px-4 pb-4">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-3 py-1">
                  <p className="text-sm font-medium text-gray-800">Your Strength</p>
                  <p className="text-sm text-gray-600">Your conversion rate for Credit Cards is 32% higher than average</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-3 py-1">
                  <p className="text-sm font-medium text-gray-800">Area to Improve</p>
                  <p className="text-sm text-gray-600">
                    <span 
                      className="cursor-pointer text-blue-600 underline"
                      onClick={() => showJargonExplanation('ULIP')}
                    >
                      ULIP
                    </span> 
                    {" "}discussions are taking longer than usual to close
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-3 py-1">
                  <p className="text-sm font-medium text-gray-800">Market Trend</p>
                  <p className="text-sm text-gray-600">
                    <span 
                      className="cursor-pointer text-blue-600 underline"
                      onClick={() => showJargonExplanation('Term Insurance')}
                    >
                      Term Insurance
                    </span> 
                    {" "}demand is up 24% in your region
                  </p>
                </div>
              </div>
              
              <div className="mt-4 bg-green-50 p-3 rounded-md flex items-start">
                <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-green-700">
                  Your pitch success rate is improving! Keep using the objection handling techniques from last week's training.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Training Tips */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleCard('training')}
          >
            <div className="flex items-center">
              <Award size={20} className="text-orange-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">Training Tips</h2>
            </div>
            {expandedCard === 'training' ? <ChevronDown size={20} className="text-gray-400" /> : <ChevronRight size={20} className="text-gray-400" />}
          </div>
          
          {expandedCard === 'training' && (
            <div className="px-4 pb-4">
              <div className="space-y-4">
                <div className="border border-gray-100 rounded-lg p-3">
                  <h3 className="font-medium text-gray-800 mb-1">Explaining Credit Score Benefits</h3>
                  <p className="text-sm text-gray-600 mb-2">Learn how to explain 
                    <span 
                      className="mx-1 cursor-pointer text-blue-600 underline"
                      onClick={() => showJargonExplanation('Credit Score')}
                    >
                      credit scores
                    </span> 
                    simply to customers
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <Volume2 size={16} className="text-blue-500 mr-1" />
                      <span className="text-xs text-blue-600">Listen in Hindi</span>
                    </div>
                    <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-md">Watch Now</button>
                  </div>
                </div>
                
                <div className="border border-gray-100 rounded-lg p-3">
                  <h3 className="font-medium text-gray-800 mb-1">Handling Price Objections</h3>
                  <p className="text-sm text-gray-600 mb-2">Master techniques to overcome price sensitivity</p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <Volume2 size={16} className="text-blue-500 mr-1" />
                      <span className="text-xs text-blue-600">Listen in Hindi</span>
                    </div>
                    <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-md">Watch Now</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white fixed bottom-0 left-0 right-0 border-t border-gray-200">
        <div className="flex justify-around">
          <button 
            className={`py-2 flex flex-col items-center flex-1 ${activeTab === 'dashboard' ? 'text-green-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <TrendingUp size={20} />
            <span className="text-xs mt-1">Dashboard</span>
          </button>
          
          <button 
            className={`py-2 flex flex-col items-center flex-1 ${activeTab === 'leads' ? 'text-green-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('leads')}
          >
            <Users size={20} />
            <span className="text-xs mt-1">Leads</span>
          </button>
          
          <button 
            className={`py-2 flex flex-col items-center flex-1 ${activeTab === 'earnings' ? 'text-green-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('earnings')}
          >
            <CreditCard size={20} />
            <span className="text-xs mt-1">Earnings</span>
          </button>
          
          <button 
            className={`py-2 flex flex-col items-center flex-1 ${activeTab === 'profile' ? 'text-green-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={20} />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </nav>

      {/* Jargon Buster Modal */}
      {showJargonBuster && selectedJargon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-medium text-lg">{selectedJargon}</h3>
              <button 
                onClick={() => setShowJargonBuster(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-500 mb-1">Simple Explanation:</div>
                <p className="text-gray-800">{jargonExplanations[selectedJargon].simple}</p>
              </div>
              
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-500 mb-1">In Detail:</div>
                <p className="text-gray-800">{jargonExplanations[selectedJargon].detail}</p>
              </div>
              
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-500 mb-1">Example:</div>
                <p className="text-gray-800">{jargonExplanations[selectedJargon].example}</p>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <button className="flex items-center text-blue-600">
                  <Volume2 size={18} className="mr-1" />
                  <span className="text-sm">Listen in Hindi</span>
                </button>
                
                <button className="bg-green-500 text-white text-sm px-4 py-2 rounded-md">
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}