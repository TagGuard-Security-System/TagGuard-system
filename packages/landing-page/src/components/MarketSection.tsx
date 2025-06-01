
import React from 'react';
import { TrendingUp, MapPin, Target, DollarSign, Users, Shield, Zap, Building2, Anchor, Factory } from 'lucide-react';

const MarketSection: React.FC = () => (
  <section id="market" className="section-container bg-gradient-to-br from-slate-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Serving Diverse Markets
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Strategic positioning across Kenya's rapidly growing security technology market, 
          addressing critical pain points with innovative solutions.
        </p>
      </div>

      {/* Market Insights Grid */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Left Column - Market Insights */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="mr-3 text-blue-600" size={28} />
            Market Insights
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rapid Industry Growth</h4>
                  <p className="text-gray-600">
                    Kenya's security industry grows 15% annually, driven by urbanization and business expansion
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <Zap className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Digital Transformation Gap</h4>
                  <p className="text-gray-600">
                    Less than 5% of security companies use digital supervision, creating massive opportunity
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 rounded-lg p-3">
                  <Shield className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Regulatory Support</h4>
                  <p className="text-gray-600">
                    Government initiatives promote technology adoption in security sector
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Economic Zones */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPin className="mr-3 text-blue-600" size={28} />
            Kenya Economic Zones
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Building2 className="text-blue-600" size={20} />
                  <span className="font-semibold text-gray-900">Nairobi Region</span>
                </div>
                <span className="text-2xl font-bold text-blue-600">45%</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Financial & Business Hub</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Anchor className="text-teal-600" size={20} />
                  <span className="font-semibold text-gray-900">Coastal Region</span>
                </div>
                <span className="text-2xl font-bold text-teal-600">25%</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Port & Tourism Security</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-600 h-2 rounded-full" style={{width: '25%'}}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Factory className="text-purple-600" size={20} />
                  <span className="font-semibold text-gray-900">Western Region</span>
                </div>
                <span className="text-2xl font-bold text-purple-600">20%</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Agricultural & Industrial</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '20%'}}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-green-600" size={20} />
                  <span className="font-semibold text-gray-900">Other Regions</span>
                </div>
                <span className="text-2xl font-bold text-green-600">10%</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Emerging Markets</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '10%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Projections */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">5-Year Growth Projections</h3>
          <p className="text-lg text-gray-600">TagGuard positioned to capture significant market share</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Target className="text-blue-600" size={32} />
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
            <h4 className="font-semibold text-gray-900 mb-1">Market Share Target</h4>
            <p className="text-sm text-gray-600">By Year 3</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-green-600" size={32} />
            </div>
            <div className="text-4xl font-bold text-green-600 mb-2">KES 12.5B</div>
            <h4 className="font-semibold text-gray-900 mb-1">Revenue Potential</h4>
            <p className="text-sm text-gray-600">Annual by Year 5</p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Users className="text-orange-600" size={32} />
            </div>
            <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
            <h4 className="font-semibold text-gray-900 mb-1">Companies Served</h4>
            <p className="text-sm text-gray-600">Target by Year 3</p>
          </div>
        </div>
      </div>

      {/* Market Growth Indicators */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">15% - 75%</div>
            <p className="text-blue-100">Digital Adoption Rate Growth</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">KES 50B - 80B</div>
            <p className="text-blue-100">Market Size (2024-2027)</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">25%</div>
            <p className="text-blue-100">Annual Technology Integration</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MarketSection;