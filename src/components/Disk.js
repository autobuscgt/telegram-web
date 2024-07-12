import React, { useState, useEffect } from 'react';

const YandexDiskFolders = () => {
  const [folders, setFolders] = useState([]);
  const accessToken = 'y0_AgAAAABf3AlOAAwXOQAAAAEKL03vAADWB5AN7cZOxI5mENgdddTuKfFzbg';

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await fetch('https://cloud-api.yandex.net/v1/disk/resources?path=/', {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          });
          

        if (response.ok) {
          const data = await response.json();
          setFolders(data.items.filter(item => item.type === 'dir'));
        } else {
          console.error('Error fetching Yandex.Disk folders:', response.status);
        }
      } catch (error) {
        console.error('Error fetching Yandex.Disk folders:', error);
      }
    };

    fetchFolders();
  }, []);

  return (
    <div>
      <h2>Yandex.Disk Folders:</h2>
      <ul>
        {folders.map(folder => (
          <li key={folder.path}>{folder.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default YandexDiskFolders;
