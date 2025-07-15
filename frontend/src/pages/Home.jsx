import BugForm from '../components/BugForm';
import BugList from '../components/BugList';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 text-purple-800">
      <header className="bg-white backdrop-blur-md shadow-md py-6 mb-8">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 drop-shadow-md">
          🐞 Bug Tracker
        </h1>
      </header>

      <main className="max-w-xl mx-auto bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg">
        <BugForm />
        <BugList />
      </main>
    </div>
  );
};

export default Home;


