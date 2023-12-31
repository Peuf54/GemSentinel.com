import React, { useState, useEffect } from 'react';
import icons from '../icons';

function GemChangelogs({selectedGemId}) {
  const [gem, setGem] = useState([])

  useEffect(() => {
    getGem();
  }, [selectedGemId]);

  const getGem = () => {
    const getInfosToDisplayUrl = `/api/v1/project_gems/${selectedGemId}`

    if (selectedGemId) {
      fetch(getInfosToDisplayUrl)
      .then((response) => response.json())
      .then((data) => {
        setGem(data);
      });
    }
  }


  return (
    <>
      <p className='header-container'>{icons.IconCodeCommit} Release tracker</p>
      <div className='changelog-card'><i id='changelog-icon'>{icons.IconCircleInfo}</i>
        <div className='changelog-text'>
          <div id='view-changelog'>
            <h3>Lastest version</h3>
            <a href={gem.changelog_page_url} target="_blank" className="button btn-link">{icons.IconArrowUpRightFromSquare}</a>
          </div>
          <p>{gem.reference_version}</p>
          <h3>Current version</h3>
          <p>{gem.current_version}</p>
        </div>
      </div>
    </>
  );
}

export default GemChangelogs;
