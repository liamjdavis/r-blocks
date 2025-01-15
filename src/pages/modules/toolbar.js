/**
 * Toolbar Component for RBlocks
 *
 * Navigation toolbar component that provides the main header and control buttons
 * for the RBlocks application. Currently displays the RBlocks header with placeholder
 * areas for package management, file operations, and execution controls.
 *
 * Dependencies:
 * - React
 * - Material-UI Icons
 * - ./helper/functions
 * - ./styles/base.css
 */

import React from 'react';
import Logout from '../logout';

//Style
import './styles/base.css';

/**
 * Navigation toolbar component for the RBlocks application.
 *
 * @returns {JSX.Element} A navigation bar containing the application header and control sections
 * @example
 * <Toolbar />
 */
export default function Toolbar() {
  return (
    <nav className="toolbar">
      <ul style={{ width: '100%', flex: 1 }}>
        <h1 className="header">RBlocks</h1>
      </ul>
      <div style={{ width: '100%', flex: 6 }}>
        {/*
                <button className="base-button">
                    packages
                </button>
                <button className="base-button">
                    upload
                </button>
                <button className="base-button">
                    tutorials
                </button>
                 */}
      </div>
      <div style={{ width: '100%', flex: 1 }}>
        {/*
                <button className="icon-button run-button">
                    <PlayArrowIcon fontSize="large" sx={{ml: "-2px", mb: "-1px"}}/>
                </button>
                <button className="icon-button stop-button">
                    <DangerousIcon fontSize="large"  sx={{ml: "-2px", mb: "-1px"}}/>
                </button>
                <button className="icon-button reset-button">
                    <FiberNewIcon fontSize="large" sx={{ml: "-2px", mb: "-1px"}}/>
                </button>
                 */}
        <Logout />
      </div>
    </nav>
  );
}
