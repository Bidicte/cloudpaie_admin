import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg"

export const LoginPage = ()=> {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/layout')
    }
  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Côté gauche - Formulaire de connexion */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* En-tête */}
          <div className="text-center mb-2 flex justify-center items-center space-x-2">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>

          {/* Carte du formulaire */}
          <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-md font-bold text-center text-gray-600 mb-4">Connectez-vous à votre compte</p>

            <div className="space-y-8">
              {/* Champ nom d'utilisateur */}
              <div>
                <label htmlFor="username" className="block text-md font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Entrez votre email"
                    autoComplete="username"
                  />
                </div>
              </div>

              {/* Champ mot de passe */}
              <div>
                <label htmlFor="password" className="block text-md font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                </div>
              </div>

              {/* Bouton de connexion */}
              <button
                type="button"
                onClick={handleClick}
                className="w-full bg-blue-600 text-white text-md py-4 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Se connecter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Côté droit - Image */}
      <div className="hidden lg:flex flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-700 to-yellow-900">
          <div className="absolute inset-0  bg-opacity-0"></div>
          <img
            src={logo}
            alt="piece de monnaie"
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-8">
              <h2 className="text-4xl font-bold mb-4">Bienvenue dans Cloudpaie</h2>
              <p className="text-xl opacity-90 mb-6">
                Votre système de gestion de paie moderne et efficace
              </p>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-75">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm opacity-75">Sécurisé</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">∞</div>
                  <div className="text-sm opacity-75">Possibilités</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}