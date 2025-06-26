import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Music, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
              <Music className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Loop Music
            </span>
          </Link>

          {user ? (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {user.role === 'artist' ? (
                  <>
                    <Link 
                      to="/dashboard" 
                      className={`hover:text-purple-600 transition-colors ${isActive('/dashboard') ? 'text-purple-600' : 'text-gray-700'}`}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      to="/submit-music" 
                      className={`hover:text-purple-600 transition-colors ${isActive('/submit-music') ? 'text-purple-600' : 'text-gray-700'}`}
                    >
                      Submit Music
                    </Link>
                    <Link 
                      to="/my-releases" 
                      className={`hover:text-purple-600 transition-colors ${isActive('/my-releases') ? 'text-purple-600' : 'text-gray-700'}`}
                    >
                      My Releases
                    </Link>
                    <Link 
                      to="/analytics" 
                      className={`hover:text-purple-600 transition-colors ${isActive('/analytics') ? 'text-purple-600' : 'text-gray-700'}`}
                    >
                      Analytics
                    </Link>
                  </>
                ) : (
                  <Link 
                    to="/admin" 
                    className={`hover:text-purple-600 transition-colors ${isActive('/admin') ? 'text-purple-600' : 'text-gray-700'}`}
                  >
                    Admin Dashboard
                  </Link>
                )}
              </nav>

              {/* User Menu */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-purple-600"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/login"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {user && isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {user.role === 'artist' ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/submit-music" 
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Submit Music
                  </Link>
                  <Link 
                    to="/my-releases" 
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    My Releases
                  </Link>
                  <Link 
                    to="/analytics" 
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Analytics
                  </Link>
                </>
              ) : (
                <Link 
                  to="/admin" 
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin Dashboard
                </Link>
              )}
              <div className="flex items-center space-x-2 pt-2 border-t border-gray-200">
                <User className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-700">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;