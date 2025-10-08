import React, { useState } from 'react';
import { Wallet, Zap, Coins, CreditCard, Bell, Shield, Database, Cloud, Box, Globe, ArrowRight, Users, Sparkles } from 'lucide-react';

export default function YieldPayArchitecture() {
    const [activeView, setActiveView] = useState('user');

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">YieldPay Technical Architecture</h1>
                    <p className="text-lg text-gray-600">Phase 1: Yield Monitoring & Automated Routing</p>
                    <p className="text-sm text-gray-500 mt-2 italic">"Simplicity is the ultimate sophistication"</p>
                </div>

                {/* View Toggle */}
                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={() => setActiveView('user')}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeView === 'user'
                            ? 'bg-indigo-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                            }`}
                    >
                        <Users className="inline-block w-5 h-5 mr-2" />
                        User Journey View
                    </button>
                    <button
                        onClick={() => setActiveView('technical')}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeView === 'technical'
                            ? 'bg-indigo-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                            }`}
                    >
                        <Box className="inline-block w-5 h-5 mr-2" />
                        Technical Components
                    </button>
                </div>

                {/* User Journey View */}
                {activeView === 'user' && (
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
                                <Sparkles className="w-6 h-6" />
                                The YieldPay Experience: From Zero to Autopilot
                            </h2>

                            {/* Journey Steps */}
                            <div className="space-y-6">
                                {/* Step 1 */}
                                <div className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        1
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect & Create</h3>
                                        <p className="text-gray-600 mb-3">User clicks "Get Started" → Connects MetaMask → Safe wallet created automatically</p>
                                        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                                            <p className="text-sm text-indigo-900 font-medium mb-2">✨ Magical Moment:</p>
                                            <p className="text-sm text-indigo-700">"Your secure vault is ready! No passwords, no recovery emails - just you and your wallet."</p>
                                        </div>
                                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                                            <Shield className="w-4 h-4" />
                                            <span>Behind the scenes: Safe wallet creation, warnings acknowledged, account indexed</span>
                                        </div>
                                    </div>
                                </div>

                                <ArrowRight className="w-6 h-6 text-indigo-300 mx-auto" />

                                {/* Step 2 */}
                                <div className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        2
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose What to Pay</h3>
                                        <p className="text-gray-600 mb-3">Browse familiar logos → Select Spotify, Netflix, etc. → See total monthly cost</p>
                                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                                            <p className="text-sm text-purple-900 font-medium mb-2">✨ Magical Moment:</p>
                                            <p className="text-sm text-purple-700">"$47/month for all your subscriptions. Let's make them free."</p>
                                        </div>
                                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                                            <CreditCard className="w-4 h-4" />
                                            <span>Behind the scenes: Real-time price API checks, APR fetch from Blend, calculation engine</span>
                                        </div>
                                    </div>
                                </div>

                                <ArrowRight className="w-6 h-6 text-indigo-300 mx-auto" />

                                {/* Step 3 */}
                                <div className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        3
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">One Smart Deposit</h3>
                                        <p className="text-gray-600 mb-3">See recommendation: "Deposit $12,000 once" → Click deposit → Approve transaction</p>
                                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                            <p className="text-sm text-green-900 font-medium mb-2">✨ Magical Moment:</p>
                                            <p className="text-sm text-green-700">"At current rates, this generates $47/month forever. Your subscriptions are now on autopilot."</p>
                                        </div>
                                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                                            <Coins className="w-4 h-4" />
                                            <span>Behind the scenes: Blend integration, Safe transaction, buffer calculation, harvest setup</span>
                                        </div>
                                    </div>
                                </div>

                                <ArrowRight className="w-6 h-6 text-indigo-300 mx-auto" />

                                {/* Step 4 */}
                                <div className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        4
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Watch It Grow</h3>
                                        <p className="text-gray-600 mb-3">Dashboard shows yield accumulating in real-time → Progress bar fills → Clean, simple visuals</p>
                                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                            <p className="text-sm text-blue-900 font-medium mb-2">✨ Magical Moment:</p>
                                            <p className="text-sm text-blue-700">"$3.50 earned this week. $43.50 to go until next harvest."</p>
                                        </div>
                                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                                            <Zap className="w-4 h-4" />
                                            <span>Behind the scenes: Real-time yield polling, APR monitoring, threshold tracking</span>
                                        </div>
                                    </div>
                                </div>

                                <ArrowRight className="w-6 h-6 text-indigo-300 mx-auto" />

                                {/* Step 5 */}
                                <div className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        5
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatic Harvest</h3>
                                        <p className="text-gray-600 mb-3">Threshold reached → Harvest executes automatically → Funds route to payment wallet</p>
                                        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                                            <p className="text-sm text-amber-900 font-medium mb-2">✨ Magical Moment:</p>
                                            <p className="text-sm text-amber-700">"🎉 Harvest complete! $47 sent to your payment wallet. Next subscriptions covered."</p>
                                        </div>
                                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                                            <Bell className="w-4 h-4" />
                                            <span>Behind the scenes: Smart contract execution, harvest routing, notification system, transaction logging</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Key Principle */}
                            <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                                <h3 className="text-xl font-semibold mb-2">The Invisible Interface</h3>
                                <p className="text-indigo-100">From the user's perspective: 5 clicks, 1 deposit, infinite subscriptions. Everything else happens like magic.</p>
                                <p className="text-indigo-200 text-sm mt-2">Total time from landing page to fully configured: &lt; 3 minutes</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Technical Components View */}
                {activeView === 'technical' && (
                    <div className="space-y-8">
                        {/* Frontend Layer */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                                <Globe className="w-6 h-6" />
                                Frontend Layer
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                                    <h3 className="font-semibold text-blue-900 mb-3">React Application</h3>
                                    <ul className="text-sm text-blue-700 space-y-2">
                                        <li>• Next.js or Vite framework</li>
                                        <li>• Tailwind CSS for styling</li>
                                        <li>• shadcn/ui components</li>
                                        <li>• Framer Motion animations</li>
                                        <li>• State management (Zustand)</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                                    <h3 className="font-semibold text-blue-900 mb-3">Web3 Integration</h3>
                                    <ul className="text-sm text-blue-700 space-y-2">
                                        <li>• wagmi + viem (Ethereum lib)</li>
                                        <li>• RainbowKit (wallet UI)</li>
                                        <li>• Safe SDK integration</li>
                                        <li>• Blend SDK integration</li>
                                        <li>• Base network config</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                                    <h3 className="font-semibold text-blue-900 mb-3">User Interface</h3>
                                    <ul className="text-sm text-blue-700 space-y-2">
                                        <li>• Landing page</li>
                                        <li>• Dashboard (main hub)</li>
                                        <li>• Subscription selector</li>
                                        <li>• Settings panel</li>
                                        <li>• Transaction history</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Backend Layer */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
                            <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2">
                                <Cloud className="w-6 h-6" />
                                Backend Services Layer
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                                        <h3 className="font-semibold text-green-900 mb-3">API Server (Node.js/Express)</h3>
                                        <ul className="text-sm text-green-700 space-y-2">
                                            <li>• RESTful endpoints</li>
                                            <li>• User profile management</li>
                                            <li>• Subscription price caching</li>
                                            <li>• Transaction history queries</li>
                                            <li>• Notification delivery</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                                        <h3 className="font-semibold text-green-900 mb-3">Worker Services</h3>
                                        <ul className="text-sm text-green-700 space-y-2">
                                            <li>• Price monitoring cron jobs</li>
                                            <li>• APR change detection</li>
                                            <li>• Harvest threshold monitoring</li>
                                            <li>• Notification queue processing</li>
                                            <li>• Analytics aggregation</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                                        <h3 className="font-semibold text-green-900 mb-3">Database (PostgreSQL)</h3>
                                        <ul className="text-sm text-green-700 space-y-2">
                                            <li>• Users table (wallet mapping)</li>
                                            <li>• Subscriptions table (services)</li>
                                            <li>• Selections table (user choices)</li>
                                            <li>• Transactions table (history)</li>
                                            <li>• Notifications table (inbox)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                                        <h3 className="font-semibold text-green-900 mb-3">Cache Layer (Redis)</h3>
                                        <ul className="text-sm text-green-700 space-y-2">
                                            <li>• APR rates (5 min TTL)</li>
                                            <li>• Subscription prices (24hr TTL)</li>
                                            <li>• User session data</li>
                                            <li>• Real-time yield calculations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Blockchain Layer */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-100">
                            <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                                <Box className="w-6 h-6" />
                                Blockchain Layer (Base L2)
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                                    <h3 className="font-semibold text-purple-900 mb-3">Smart Contracts</h3>
                                    <ul className="text-sm text-purple-700 space-y-2">
                                        <li>• <strong>YieldPayVault.sol</strong></li>
                                        <li className="ml-4">- Harvest routing logic</li>
                                        <li className="ml-4">- Permission management</li>
                                        <li className="ml-4">- Spending limits</li>
                                        <li>• <strong>HarvestAutomator.sol</strong></li>
                                        <li className="ml-4">- Threshold monitoring</li>
                                        <li className="ml-4">- Time-based execution</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                                    <h3 className="font-semibold text-purple-900 mb-3">External Protocols</h3>
                                    <ul className="text-sm text-purple-700 space-y-2">
                                        <li>• <strong>Safe (Gnosis Safe)</strong></li>
                                        <li className="ml-4">- User wallet creation</li>
                                        <li className="ml-4">- Multi-sig if needed</li>
                                        <li>• <strong>Blend Money</strong></li>
                                        <li className="ml-4">- Yield generation</li>
                                        <li className="ml-4">- Deposit/withdrawal</li>
                                        <li className="ml-4">- APR data source</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                                    <h3 className="font-semibold text-purple-900 mb-3">Infrastructure</h3>
                                    <ul className="text-sm text-purple-700 space-y-2">
                                        <li>• Base RPC nodes (Alchemy)</li>
                                        <li>• Etherscan API (Base)</li>
                                        <li>• Event indexing (The Graph)</li>
                                        <li>• Gas price oracle</li>
                                        <li>• Transaction relayer service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* External Integrations */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-100">
                            <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                                <Wallet className="w-6 h-6" />
                                External Integrations
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                                    <h3 className="font-semibold text-amber-900 mb-3">Subscription Service APIs</h3>
                                    <ul className="text-sm text-amber-700 space-y-2">
                                        <li>• Spotify Web API (pricing)</li>
                                        <li>• Apple Music API (pricing)</li>
                                        <li>• Amazon API (Prime pricing)</li>
                                        <li>• Hulu API (tier pricing)</li>
                                        <li>• Manual updates for Netflix, HBO</li>
                                    </ul>
                                </div>
                                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                                    <h3 className="font-semibold text-amber-900 mb-3">Oracle & Data Services</h3>
                                    <ul className="text-sm text-amber-700 space-y-2">
                                        <li>• Chainlink Price Feeds</li>
                                        <li>• UMA Oracle (backup)</li>
                                        <li>• CoinGecko API (price data)</li>
                                        <li>• Email service (SendGrid)</li>
                                        <li>• Analytics (PostHog/Mixpanel)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Data Flow Diagram */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-6">Critical Data Flows</h2>

                            <div className="space-y-6">
                                {/* Flow 1: Deposit */}
                                <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600">
                                    <h3 className="font-semibold text-indigo-900 mb-3">1. Deposit Flow</h3>
                                    <div className="text-sm text-indigo-700 space-y-2">
                                        <p><strong>User Action:</strong> Click "Deposit" button</p>
                                        <p><strong>Frontend:</strong> Validate balance → Prepare transaction → Show gas estimate</p>
                                        <p><strong>Web3:</strong> User signs transaction via MetaMask</p>
                                        <p><strong>Blockchain:</strong> Safe wallet → Blend Money vault (deposit recorded)</p>
                                        <p><strong>Backend:</strong> Event listener catches deposit → Updates database → Refreshes dashboard</p>
                                        <p><strong>Result:</strong> Dashboard shows updated balance in &lt;5 seconds</p>
                                    </div>
                                </div>

                                {/* Flow 2: Yield Monitoring */}
                                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                                    <h3 className="font-semibold text-green-900 mb-3">2. Yield Monitoring Flow</h3>
                                    <div className="text-sm text-green-700 space-y-2">
                                        <p><strong>Worker Service:</strong> Every 5 minutes, query Blend API for all user positions</p>
                                        <p><strong>Calculation:</strong> Compare accrued yield vs harvest threshold</p>
                                        <p><strong>Cache:</strong> Store latest yield amounts in Redis</p>
                                        <p><strong>Dashboard:</strong> Frontend polls cache → Updates progress bars in real-time</p>
                                        <p><strong>Trigger:</strong> When threshold reached → Queue harvest transaction</p>
                                    </div>
                                </div>

                                {/* Flow 3: Automated Harvest */}
                                <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                                    <h3 className="font-semibold text-purple-900 mb-3">3. Automated Harvest Flow</h3>
                                    <div className="text-sm text-purple-700 space-y-2">
                                        <p><strong>Trigger:</strong> Threshold reached OR time-based schedule hit</p>
                                        <p><strong>Backend:</strong> Verify permissions → Check spending limits → Prepare transaction</p>
                                        <p><strong>Smart Contract:</strong> HarvestAutomator calls Blend harvest → Routes to payment address</p>
                                        <p><strong>Verification:</strong> Transaction confirmed → Update database → Log history</p>
                                        <p><strong>Notification:</strong> Push notification to user → Email sent → Dashboard updated</p>
                                        <p><strong>Result:</strong> User sees "Harvest complete" notification within 1 minute</p>
                                    </div>
                                </div>

                                {/* Flow 4: Price Monitoring */}
                                <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
                                    <h3 className="font-semibold text-amber-900 mb-3">4. Price Monitoring Flow</h3>
                                    <div className="text-sm text-amber-700 space-y-2">
                                        <p><strong>Daily Cron:</strong> 6 AM UTC, query all subscription APIs</p>
                                        <p><strong>Oracle Verification:</strong> Cross-check prices with Chainlink feeds</p>
                                        <p><strong>Change Detection:</strong> Compare with cached prices → Calculate delta</p>
                                        <p><strong>If Changed:</strong> Update database → Recalculate deposit requirements</p>
                                        <p><strong>Notification:</strong> Alert affected users → Show impact on dashboard</p>
                                        <p><strong>Cache Update:</strong> Store new prices with 24hr TTL</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Security Architecture */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-100">
                            <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-2">
                                <Shield className="w-6 h-6" />
                                Security Architecture
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                                        <h3 className="font-semibold text-red-900 mb-3">Smart Contract Security</h3>
                                        <ul className="text-sm text-red-700 space-y-2">
                                            <li>• OpenZeppelin contracts as base</li>
                                            <li>• Reentrancy guards on all functions</li>
                                            <li>• Role-based access control (RBAC)</li>
                                            <li>• Spending limits per transaction</li>
                                            <li>• Pausable in emergencies</li>
                                            <li>• Time-locked admin functions</li>
                                            <li>• Third-party audit (Trail of Bits)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                                        <h3 className="font-semibold text-red-900 mb-3">Permission Model</h3>
                                        <ul className="text-sm text-red-700 space-y-2">
                                            <li>• User grants limited approval</li>
                                            <li>• Only harvested yield movable</li>
                                            <li>• Principal always user-controlled</li>
                                            <li>• Revocable at any time</li>
                                            <li>• 48hr delay for address changes</li>
                                            <li>• Event logs for all permissions</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                                        <h3 className="font-semibold text-red-900 mb-3">Application Security</h3>
                                        <ul className="text-sm text-red-700 space-y-2">
                                            <li>• HTTPS/TLS everywhere</li>
                                            <li>• Rate limiting (100 req/min)</li>
                                            <li>• Input validation & sanitization</li>
                                            <li>• CORS restricted to app domain</li>
                                            <li>• No private key storage ever</li>
                                            <li>• Encrypted API keys (Vault)</li>
                                            <li>• Security headers (CSP, HSTS)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                                        <h3 className="font-semibold text-red-900 mb-3">Monitoring & Response</h3>
                                        <ul className="text-sm text-red-700 space-y-2">
                                            <li>• Real-time transaction monitoring</li>
                                            <li>• Anomaly detection (unusual amounts)</li>
                                            <li>• Failed transaction alerts</li>
                                            <li>• Security event logging</li>
                                            <li>• 24/7 uptime monitoring</li>
                                            <li>• Incident response playbook</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technology Stack Summary */}
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                            <h2 className="text-2xl font-bold mb-6">Complete Technology Stack</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                                <div>
                                    <h3 className="font-semibold mb-3 text-indigo-200">Frontend</h3>
                                    <ul className="space-y-1 text-indigo-100">
                                        <li>• React + Next.js</li>
                                        <li>• TypeScript</li>
                                        <li>• Tailwind CSS</li>
                                        <li>• wagmi + viem</li>
                                        <li>• RainbowKit</li>
                                        <li>• Framer Motion</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-3 text-indigo-200">Backend</h3>
                                    <ul className="space-y-1 text-indigo-100">
                                        <li>• Node.js + Express</li>
                                        <li>• PostgreSQL</li>
                                        <li>• Redis</li>
                                        <li>• Bull (job queue)</li>
                                        <li>• Prisma ORM</li>
                                        <li>• Docker</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-3 text-indigo-200">Blockchain</h3>
                                    <ul className="space-y-1 text-indigo-100">
                                        <li>• Solidity 0.8.x</li>
                                        <li>• Hardhat</li>
                                        <li>• Base L2</li>
                                        <li>• Safe SDK</li>
                                        <li>• Blend SDK</li>
                                        <li>• Ethers.js</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-3 text-indigo-200">Infrastructure</h3>
                                    <ul className="space-y-1 text-indigo-100">
                                        <li>• Vercel (frontend)</li>
                                        <li>• Railway (backend)</li>
                                        <li>• Alchemy (RPC)</li>
                                        <li>• The Graph (indexing)</li>
                                        <li>• SendGrid (email)</li>
                                        <li>• PostHog (analytics)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Design Principles Footer */}
                <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 text-center">Architectural Design Principles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Invisible Complexity</h3>
                            <p className="text-gray-300 text-sm">Hide blockchain mechanics. Users see magic, not technology.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Real-Time Everything</h3>
                            <p className="text-gray-300 text-sm">Dashboard updates instantly. No refresh buttons, no waiting.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Security First</h3>
                            <p className="text-gray-300 text-sm">Non-custodial, audited, permission-based. User safety paramount.</p>
                        </div>
                    </div>
                </div>

                {/* Phase Roadmap */}
                <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Evolution Roadmap</h2>
                    <div className="space-y-6">
                        {/* Phase 1 */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 rounded-lg flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold text-indigo-600">Phase 1</span>
                                <span className="text-xs text-indigo-500">Current</span>
                            </div>
                            <div className="flex-1 bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                                <h3 className="font-semibold text-indigo-900 mb-2">Yield Monitoring & Manual Payment</h3>
                                <p className="text-sm text-indigo-700 mb-3">Foundation: Core infrastructure, Blend integration, automated harvest routing to user wallet</p>
                                <div className="text-sm text-indigo-600">
                                    <strong>Key Architecture:</strong> Safe wallets, Blend SDK, harvest automation, notification system
                                </div>
                            </div>
                        </div>

                        {/* Phase 1.5 */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-24 h-24 bg-purple-100 rounded-lg flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold text-purple-600">Phase 1.5</span>
                                <span className="text-xs text-purple-500">Next</span>
                            </div>
                            <div className="flex-1 bg-purple-50 rounded-lg p-6 border border-purple-200">
                                <h3 className="font-semibold text-purple-900 mb-2">Enhanced Intelligence</h3>
                                <p className="text-sm text-purple-700 mb-3">Smarter buffers, better predictions, multi-asset support, advanced analytics</p>
                                <div className="text-sm text-purple-600">
                                    <strong>New Components:</strong> ML-based buffer calculation, historical APR analysis, portfolio diversification
                                </div>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-24 h-24 bg-green-100 rounded-lg flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold text-green-600">Phase 2</span>
                                <span className="text-xs text-green-500">Future</span>
                            </div>
                            <div className="flex-1 bg-green-50 rounded-lg p-6 border border-green-200">
                                <h3 className="font-semibold text-green-900 mb-2">Direct Payment Integration</h3>
                                <p className="text-sm text-green-700 mb-3">Full autopilot: Harvest → Convert → Pay subscriptions automatically</p>
                                <div className="text-sm text-green-600">
                                    <strong>Major Additions:</strong> Payment processor (Stripe), offramp integration (Coinbase), merchant APIs, reconciliation engine
                                </div>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-24 h-24 bg-amber-100 rounded-lg flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold text-amber-600">Phase 3</span>
                                <span className="text-xs text-amber-500">Vision</span>
                            </div>
                            <div className="flex-1 bg-amber-50 rounded-lg p-6 border border-amber-200">
                                <h3 className="font-semibold text-amber-900 mb-2">Mainstream Ready</h3>
                                <p className="text-sm text-amber-700 mb-3">No crypto knowledge needed: Gasless, fiat onramp, mobile apps, global support</p>
                                <div className="text-sm text-amber-600">
                                    <strong>Full Platform:</strong> RelayKit (gasless), fiat onramp, mobile native apps, x402 integration, multi-region
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Metrics Dashboard */}
                <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Target Performance Metrics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 3s</div>
                            <div className="text-sm text-blue-700">Dashboard Load Time</div>
                        </div>
                        <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                            <div className="text-3xl font-bold text-green-600 mb-2">&lt; 5s</div>
                            <div className="text-sm text-green-700">Data Refresh Cycle</div>
                        </div>
                        <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
                            <div className="text-3xl font-bold text-purple-600 mb-2">99.5%</div>
                            <div className="text-sm text-purple-700">System Uptime</div>
                        </div>
                        <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
                            <div className="text-3xl font-bold text-amber-600 mb-2">&lt; 3 min</div>
                            <div className="text-sm text-amber-700">Zero to Configured</div>
                        </div>
                    </div>
                </div>

                {/* Architecture Notes */}
                <div className="mt-8 bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Critical Architecture Notes</h2>
                    <div className="space-y-4 text-sm text-gray-700">
                        <div className="flex gap-3">
                            <span className="text-indigo-600 font-bold">1.</span>
                            <p><strong>Non-Custodial by Design:</strong> YieldPay never holds user funds. All assets remain in user-controlled Safe wallets. Smart contracts only have limited permission to route harvested yields.</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-indigo-600 font-bold">2.</span>
                            <p><strong>Optimistic UI:</strong> Frontend shows success immediately, confirms in background. Users don't wait for blockchain confirmations - they see instant feedback.</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-indigo-600 font-bold">3.</span>
                            <p><strong>Fail-Safe Defaults:</strong> If external services fail (Blend API down, oracle offline), system uses cached data with clear warnings. Never block user actions.</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-indigo-600 font-bold">4.</span>
                            <p><strong>Progressive Enhancement:</strong> Core functionality works without JavaScript (wallet connection excepted). Advanced features layer on top for supported browsers.</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-indigo-600 font-bold">5.</span>
                            <p><strong>Horizontal Scaling:</strong> Backend services are stateless and can scale independently. Database uses read replicas. Redis cluster for high availability.</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-indigo-600 font-bold">6.</span>
                            <p><strong>Audit Trail Everything:</strong> Every state change logged immutably. Blockchain provides transaction history. Backend logs user actions. Full transparency.</p>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">From Architecture to Implementation</h2>
                    <p className="text-indigo-100 mb-6 max-w-3xl mx-auto">
                        This architecture serves as the blueprint for YieldPay. Every component has been designed with simplicity, security, and user delight in mind.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                            <h3 className="font-semibold mb-2">Next: Smart Contracts</h3>
                            <p className="text-indigo-200">Design YieldPayVault.sol and HarvestAutomator.sol with full specifications</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                            <h3 className="font-semibold mb-2">Then: API Design</h3>
                            <p className="text-indigo-200">Document all REST endpoints, data schemas, and integration patterns</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                            <h3 className="font-semibold mb-2">Finally: UI/UX Specs</h3>
                            <p className="text-indigo-200">Wireframes, component library, interaction patterns, and animations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}