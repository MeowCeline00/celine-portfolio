import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './DuckGame.css';
import { DiJavascript1, DiReact, DiHtml5 } from "react-icons/di";

// Import images
import normalDuck from '../../../Assets/Punchup/the_duck.png';
import rightArrowImg from '../../../Assets/Punchup/right_arrow_button.png';
import universityImg from '../../../Assets/Punchup/university_building.png';
import collegeImg from '../../../Assets/Punchup/college_building.png';
import graduatedDuck from '../../../Assets/Punchup/duck_hat.png';
import dizzyDuck from '../../../Assets/Punchup/duck_dizzy.png';
import betterDuck from '../../../Assets/Punchup/duck_better.png';
import otherDucks from '../../../Assets/Punchup/duck_other_ducks.png';
import restartButton from '../../../Assets/Punchup/restart_button.png';
import cosplayDuck from '../../../Assets/Punchup/duck_cosplay.png';

const DuckGame = ({ show, handleClose }) => {
  // Game state
  const [duckPosition, setDuckPosition] = useState(200);
  const [duckImage, setDuckImage] = useState(normalDuck);
  const [gameStage, setGameStage] = useState(0);
  const [showOtherDucks, setShowOtherDucks] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);
  const [wigglingBuilding, setWigglingBuilding] = useState('');
  const [showSkillsBubble, setShowSkillsBubble] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showFinalPause, setShowFinalPause] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showCosplayBubble, setShowCosplayBubble] = useState(true);
  
  // Building positions - made BCIT closer to UBC
  const buildings = [
    { id: 1, type: 'ubc', position: 600, name: 'UBC', image: universityImg, stageRequired: 0 },
    { id: 2, type: 'bcit', position: 1000, name: 'BCIT', image: collegeImg, stageRequired: 1 }
  ];
  
  // Stage width constants - reduced since buildings are closer
  const stageWidth = 1800;
  const visibleWidth = 950;
  const [stagePosition, setStagePosition] = useState(0);
  
  // Set up introduction sequence when the game starts
  useEffect(() => {
    if (show) {
      // Start duck wiggling for 2 seconds
      setIsWiggling(true);
      
      // Stop wiggling after 2 seconds
      setTimeout(() => {
        setIsWiggling(false);
      }, 2000);
    }
  }, [show]);
  
  // Handle right arrow click
  const handleRightArrowClick = () => {
    // If introduction is showing, hide it
    if (showIntro) {
      setShowIntro(false);
      setShowCosplayBubble(false);
      return;
    }
    
    // If game is in final pause or completed, don't allow further movement
    if (showFinalPause || gameCompleted) return;
    
    // Move the duck
    const newDuckPosition = Math.min(duckPosition + 60, visibleWidth - 150);
    setDuckPosition(newDuckPosition);
    
    // Scroll stage when duck moves right
    if (newDuckPosition > visibleWidth * 0.6 && stagePosition < stageWidth - visibleWidth) {
      const newStagePosition = Math.min(stagePosition + 60, stageWidth - visibleWidth);
      setStagePosition(newStagePosition);
    }
    
    // Check if duck has reached the end position (after getting skills)
    if (gameStage === 2 && showSkillsBubble && duckPosition >= visibleWidth - 200 && !showFinalPause) {
      // Set final pause state
      setShowFinalPause(true);
      
      // Pause for 3 seconds before showing completion screen
      setTimeout(() => {
        setGameCompleted(true);
      }, 3000);
    }
  };
  
  // Handle building click
  const handleBuildingClick = (buildingType) => {
    if (buildingType === 'ubc' && gameStage === 0) {
      setDuckImage(graduatedDuck);
      setGameStage(1);
      
      // After 4 seconds, switch back to normal duck
      setTimeout(() => {
        setDuckImage(normalDuck);
      }, 4000);
    } 
    else if (buildingType === 'bcit' && gameStage === 1) {
      // Keep duck_better.png as the final state (no timeout to change back)
      setDuckImage(betterDuck);
      setGameStage(2);
    }
  };
  
  // Check if duck is near UBC or BCIT
  useEffect(() => {
    const absoluteDuckPosition = stagePosition + duckPosition;
    const ubcBuilding = buildings.find(b => b.type === 'ubc');
    const bcitBuilding = buildings.find(b => b.type === 'bcit');
    
    // Check if duck is approaching UBC for the first time
    if (gameStage === 0 && 
        absoluteDuckPosition > ubcBuilding.position - 200 && 
        absoluteDuckPosition < ubcBuilding.position - 100) {
      
      // Make UBC building wiggle as duck approaches and change duck to dizzy
      setWigglingBuilding('ubc');
      setDuckImage(dizzyDuck);
      
      // After duck gets closer, stop wiggling
      setTimeout(() => {
        setWigglingBuilding('');
      }, 2000);
    }
    else if (gameStage === 0 && 
        absoluteDuckPosition > ubcBuilding.position - 100 && 
        absoluteDuckPosition < ubcBuilding.position + 150) {
      
      // Keep duck dizzy when it gets closer to UBC
      setDuckImage(dizzyDuck);
    }
    // When duck moves past UBC, change back to normal
    else if (gameStage === 0 && 
        absoluteDuckPosition > ubcBuilding.position + 150) {
      
      setDuckImage(normalDuck);
    }
    
    // Check if duck is approaching BCIT
    else if (gameStage === 1 && 
        absoluteDuckPosition > bcitBuilding.position - 200 && 
        absoluteDuckPosition < bcitBuilding.position - 100) {
      
      // Make BCIT building wiggle as duck approaches
      setWigglingBuilding('bcit');
      setDuckImage(dizzyDuck);
      
      // After duck gets closer, stop wiggling
      setTimeout(() => {
        setWigglingBuilding('');
      }, 2000);
    }
    // Check if duck is near BCIT for the first time
    else if (gameStage === 1 && 
        absoluteDuckPosition > bcitBuilding.position - 100 && 
        absoluteDuckPosition < bcitBuilding.position + 150) {
      
      setDuckImage(dizzyDuck);
      
      // After 4 seconds, change to better duck permanently
      setTimeout(() => {
        setDuckImage(betterDuck);
        setGameStage(2);
        
        // After the duck becomes better, show the skills bubble
        setTimeout(() => {
          setShowSkillsBubble(true);
        }, 1000);
      }, 4000);
    }
  }, [duckPosition, stagePosition, gameStage, buildings]);
  
  // Check if duck is between buildings to show other ducks
  useEffect(() => {
    const absoluteDuckPosition = stagePosition + duckPosition;
    const ubcPosition = buildings.find(b => b.type === 'ubc').position;
    const bcitPosition = buildings.find(b => b.type === 'bcit').position;
    
    // Calculate journey progress as a percentage
    const totalJourney = bcitPosition - ubcPosition;
    const journeyProgress = (absoluteDuckPosition - ubcPosition) / totalJourney * 100;
    
    // Show other ducks at 20% of the journey
    if (gameStage === 1 && journeyProgress >= 20 && journeyProgress < 60 && !showOtherDucks) {
      setShowOtherDucks(true);
      setIsWiggling(true);
      
      // Stop wiggling after 3 seconds
      setTimeout(() => {
        setIsWiggling(false);
      }, 3000);
    }
    
    // Hide other ducks at 60% of the journey
    if (gameStage === 1 && journeyProgress >= 60 && showOtherDucks) {
      setShowOtherDucks(false);
    }
  }, [duckPosition, stagePosition, gameStage, showOtherDucks, buildings]);
  
  // Add keyboard support for arrow key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!show) return;
      
      if (e.key === 'ArrowRight') {
        handleRightArrowClick();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [show, handleRightArrowClick]);
  
  // Handle restart
  const handleRestart = () => {
    setDuckPosition(200);
    setStagePosition(0);
    setDuckImage(normalDuck);
    setGameStage(0);
    setShowOtherDucks(false);
    setIsWiggling(false);
    setWigglingBuilding('');
    setShowSkillsBubble(false);
    setGameCompleted(false);
    setShowFinalPause(false);
    setShowIntro(true);
    setShowCosplayBubble(true);
    
    // Start duck wiggling for 2 seconds
    setIsWiggling(true);
    setTimeout(() => {
      setIsWiggling(false);
    }, 2000);
  };
  
  // Reset game when modal closes
  useEffect(() => {
    if (!show) {
      handleRestart();
    }
  }, [show]);
  
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      size="xl" 
      centered 
      className="duck-game-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Celine's Duck Adventure</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        {gameCompleted ? (
          <div className="game-complete-screen">
            <img 
              src={restartButton} 
              alt="Restart" 
              className="restart-button"
              onClick={handleRestart}
            />
          </div>
        ) : (
          <div className="duck-game-container">
            {/* Stage with duck and buildings */}
            <div className="duck-stage-wrapper">
              <div 
                className="duck-game-stage" 
                style={{ 
                  transform: `translateX(-${stagePosition}px)`,
                  width: `${stageWidth}px`
                }}
              >
                {/* Background */}
                <div className="duck-game-sky"></div>
                <div className="duck-game-ground"></div>
                
                {/* Buildings */}
                {buildings.map((building) => (
                  <div 
                    key={building.id}
                    className={`building ${building.type}-building ${wigglingBuilding === building.type ? 'wiggling' : ''}`}
                    style={{
                      left: `${building.position}px`,
                    }}
                    onClick={() => handleBuildingClick(building.type)}
                  >
                    <div className="building-instruction">click on the building~</div>
                    <img src={building.image} alt={building.name} className="building-img" />
                    <div className="building-name">{building.name}</div>
                  </div>
                ))}
              </div>
              
              {/* Duck character (fixed position relative to viewport) */}
              <div 
                className={`duck-character ${isWiggling ? 'wiggling' : ''}`}
                style={{ 
                  left: `${duckPosition}px`,
                }}
              >
                <img src={duckImage} alt="Duck character" />
                
                {/* Introduction text and cosplay bubble */}
                {showIntro && (
                  <div className="intro-text-bubble">
                    <p>"Hi I am duck Celine, I am a big fan of Japanese Animation and Cosplay"</p>
                  </div>
                )}
                
                {/* Cosplay bubble */}
                {showCosplayBubble && (
                  <div className="cosplay-bubble">
                    <img src={cosplayDuck} alt="Duck Cosplay" />
                  </div>
                )}
                
                {/* Skills bubble with logos in fan pattern */}
                {showSkillsBubble && (
                  <div className="skills-bubble">
                    <div className="skills-fan">
                      <DiHtml5 className="skill-logo html-logo" />
                      <DiJavascript1 className="skill-logo java-logo" />
                      <DiReact className="skill-logo react-logo" />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Other ducks - positioned at the middle of two buildings */}
              {showOtherDucks && (
                <div 
                  className={`other-ducks ${isWiggling ? 'wiggling' : ''}`}
                  style={{ 
                    left: `${(buildings.find(b => b.type === 'ubc').position + buildings.find(b => b.type === 'bcit').position) / 2}px`,
                  }}
                >
                  <img src={otherDucks} alt="Other ducks" />
                </div>
              )}
            </div>
            
            {/* Right Arrow Button */}
            <button 
              className="arrow-button right-arrow" 
              onClick={handleRightArrowClick}
              aria-label="Move right"
            >
              <img src={rightArrowImg} alt="Move right" />
            </button>
            
            {/* Instructions */}
            <div className="game-instructions">
              <p>Click the right arrow button to move forward. Click on buildings to interact with them!</p>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DuckGame;