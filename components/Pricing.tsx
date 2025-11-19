'use client'
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '299',
      description: 'Perfect for small businesses and startups',
      features: [
        'Monthly bookkeeping',
        'Financial statements',
        'Tax preparation assistance',
        'Email support',
        'Quarterly business reviews',
        'Basic expense tracking'
      ]
    },
    {
      name: 'Professional',
      price: '599',
      description: 'Ideal for growing businesses',
      popular: true,
      features: [
        'Everything in Starter, plus:',
        'Weekly bookkeeping',
        'Advanced financial reporting',
        'Tax planning & strategy',
        'Priority phone & email support',
        'Monthly business reviews',
        'Cash flow management',
        'Payroll processing (up to 10 employees)',
        'Accounts receivable/payable management'
      ]
    },
    {
      name: 'Enterprise',
      price: '1,299',
      description: 'Comprehensive solutions for established firms',
      features: [
        'Everything in Professional, plus:',
        'Daily bookkeeping',
        'Custom financial reporting',
        'CFO advisory services',
        'Dedicated account manager',
        'Weekly strategic reviews',
        'Multi-entity consolidation',
        'Unlimited payroll processing',
        'Audit preparation & support',
        'Financial forecasting & modeling'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include our commitment to precision and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-blue-600 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <p className="text-sm text-gray-500">
            Need a custom solution? <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold">Contact us</a> for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
