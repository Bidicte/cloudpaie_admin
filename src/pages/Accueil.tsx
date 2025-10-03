import { Sparkles, Users, Calculator, FileText, BarChart3, Shield, Zap, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PayrollLanding() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/layout')
    }
  const features = [
    {
      icon: Calculator,
      title: 'Calcul Automatisé',
      description: 'Calculez automatiquement les salaires, cotisations et impôts en quelques clics',
      badge: 'Nouveau',
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'Bulletins de Paie',
      description: 'Générez des bulletins conformes aux normes légales en un instant',
      badge: 'Populaire',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Gestion des Employés',
      description: 'Centralisez toutes les données RH et suivez les congés, absences et présences',
      badge: 'Nouveau',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Rapports & Analyses',
      description: 'Visualisez vos données avec des tableaux de bord intelligents et exportables',
      badge: '',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Conformité Légale',
      description: 'Restez à jour avec les dernières réglementations fiscales et sociales',
      badge: 'Mis à jour',
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Traitement Rapide',
      description: 'Traitez la paie de centaines d\'employés en quelques minutes',
      badge: '',
      color: 'yellow'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '15 000',
      period: '/mois',
      features: ['Jusqu\'à 25 employés', 'Bulletins de paie', 'Support email', 'Rapports basiques'],
      color: 'gray',
      popular: false
    },
    {
      name: 'Business',
      price: '35 000',
      period: '/mois',
      features: ['Jusqu\'à 100 employés', 'Tous les modules', 'Support prioritaire', 'Rapports avancés', 'API disponible'],
      color: 'blue',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Sur mesure',
      period: '',
      features: ['Employés illimités', 'Personnalisation complète', 'Support dédié 24/7', 'Formation incluse', 'Intégrations sur mesure'],
      color: 'purple',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Nouveaux Modules Disponibles</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Gérez votre paie
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
                en toute simplicité
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Découvrez nos nouveaux modules de gestion de paie qui transforment 
              une tâche complexe en un processus simple et rapide
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleClick}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-yellow-500 text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all">
                Essai gratuit 30 jours
              </button>
              <button 
                onClick={handleClick}
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-yellow-500 transition-colors">
                Demander une démo
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 mt-12 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span>Configuration en 5 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span>100% sécurisé</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-600" />
                <span>+500 entreprises</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Modules Puissants pour Simplifier Votre Gestion
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce dont vous avez besoin pour gérer efficacement votre paie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {feature.badge && (
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  feature.badge === 'Nouveau' 
                    ? 'bg-yellow-100 text-yellow-700' 
                    : feature.badge === 'Populaire'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {feature.badge}
                </span>
              )}
              
              <div className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choisissez Votre Formule
            </h2>
            <p className="text-xl text-gray-600">
              Des tarifs transparents adaptés à la taille de votre entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-4 ring-yellow-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="flex items-end justify-center">
                    <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2 mb-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-yellow-500 text-white hover:shadow-xl'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Commencer maintenant
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-yellow-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Prêt à Révolutionner Votre Gestion de Paie ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des centaines d'entreprises qui nous font confiance
          </p>
          <button 
            onClick={handleClick}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
            Démarrer gratuitement
          </button>
        </div>
      </div>
    </div>
  );
}