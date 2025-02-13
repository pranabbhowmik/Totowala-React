import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const History = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [rides, setRides] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRides([
        {
          id: 1,
          date: '15 Mar 2024',
          time: '10:30 AM',
          from: 'Salt Lake Sector V',
          to: 'Newtown',
          driversName: 'Pranab Bhowmik',
          amount: 250,
          status: 'completed'
        },
        {
          id: 2,
          date: '14 Mar 2024',
          time: '2:15 PM',
          from: 'City Center',
          to: 'Science City',
          driversName: 'Pranab Bhowmik',
          amount: 180,
          status: 'cancelled'
        },
        {
          id: 3,
          date: '14 Mar 2024',
          time: '9:45 AM',
          from: 'Howrah Station',
          to: 'Park Street',
          driversName: 'Pranab Bhowmik',
          amount: 320,
          status: 'completed'
        }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const handleNavigate = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  const RideSkeleton = () => (
    <div className="animate-pulse bg-white rounded-lg p-4 mb-4 shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-3 flex-1">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/4"></div>
        </div>
        <div className="h-8 w-20 bg-gray-200 rounded"></div>
      </div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
    </div>
  );

  const RideCard = ({ ride }) => (
    <div className="bg-white rounded-lg p-4 mb-4 shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="text-sm text-gray-500 font-mono">{ride.date} • {ride.time}</div>
          <div className="font-medium mt-1 font-mono group-hover:text-yellow-600 transition-colors">
            {ride.from} → {ride.to}
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          ride.status === 'completed' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        } font-mono`}>
          {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
        </span>
      </div>
      <div>
        <span className='font-robotoMono'>Totowala: {ride.driversName}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold font-mono">₹{ride.amount}</span>
        <button className="text-yellow-500 hover:text-yellow-600 font-medium text-sm transition-colors font-mono">
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-md mx-auto p-4">
        {/* Header */}
        <div className="flex items-center mb-6 group">
          <button 
            onClick={handleNavigate} 
            className="mr-3 p-2 rounded-full bg-yellow-100 hover:bg-yellow-200 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-yellow-700" />
          </button>
          <h1 className="text-2xl font-bold font-mono group-hover:text-yellow-600 transition-colors">
            Ride History
          </h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2  mb-4  pb-2 scrollbar-hide">
          {['All', 'This Week', 'This Month'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-full bg-white shadow-sm hover:bg-yellow-50 hover:shadow transition-all whitespace-nowrap font-robotoMono focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Rides List */}
        <div className="space-y-4">
          {loading ? (
            <>
              <RideSkeleton />
              <RideSkeleton />
              <RideSkeleton />
            </>
          ) : (
            rides.map(ride => (
              <RideCard key={ride.id} ride={ride} />
            ))
          )}
        </div>

        {/* No Rides Message */}
        {!loading && rides.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 font-mono">No rides yet</h3>
            <p className="text-gray-500 font-mono">Book your first ride and it will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;