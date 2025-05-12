import React from 'react';
import { Link } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

const Navbar = () => {
    const { address, isConnected } = useAccount();
    const { connect } = useConnect({
        connector: new MetaMaskConnector(),
    });
    const { disconnect } = useDisconnect();

    return (
        <nav className="bg-gray-900/95 backdrop-blur-xl text-white shadow-lg border-b border-purple-500/30 relative z-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center py-4 space-y-6">
                    <Link to="/" style={{fontSize: '300px'}} className="logo-text font-bold text-glow text-purple-300 hover:text-purple-200 transition-all duration-300 px-6 py-3 rounded-lg bg-purple-900/30 border border-purple-500/20 mb-4 transform hover:scale-105">
                        ETHERIX
                    </Link>

                    <div className="flex items-center justify-center space-x-8 flex-wrap gap-y-4">
                        <Link to="/buy-ticket" className="nav-link hover:text-purple-400 transition-all duration-300 hover:scale-105">
                            Buy Ticket
                        </Link>
                        <Link to="/issue-ticket" className="nav-link hover:text-purple-400 transition-all duration-300 hover:scale-105">
                            Issue Ticket
                        </Link>
                        <Link to="/my-tickets" className="nav-link hover:text-purple-400 transition-all duration-300 hover:scale-105">
                            My Tickets
                        </Link>
                        <Link to="/resale-ticket" className="nav-link hover:text-purple-400 transition-all duration-300 hover:scale-105">
                            Resale
                        </Link>
                    </div>

                    <div className="flex items-center justify-center">
                        {isConnected ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium text-purple-200 bg-purple-900/50 px-4 py-2 rounded-full border border-purple-500/30 shadow-lg">
                                    {address?.slice(0, 6)}...{address?.slice(-4)}
                                </span>
                                <button
                                    onClick={() => disconnect()}
                                    className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5"
                                >
                                    Disconnect
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => connect()}
                                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5"
                            >
                                Connect Wallet
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 