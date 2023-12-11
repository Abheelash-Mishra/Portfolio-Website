import {useRef, useEffect} from 'react';

const Hero = () => {
    const videoContainerRef = useRef(null);

    // Find the detach button host element
    const detachButtonHost = document.getElementById('detach-button-host');

    // Check if the element exists
    if (detachButtonHost) {
        // Remove the detach button host element and its children
        detachButtonHost.parentNode.removeChild(detachButtonHost);
    }


    useEffect(() => {
        const handleMouseMove = (event) => {
            const {clientX, clientY} = event;
            const videoContainer = videoContainerRef.current;

            // Calculate the movement values based on mouse position
            const moveX = (clientX - window.innerWidth / 2) / 200;
            const moveY = (clientY - window.innerHeight / 2) / 50;

            // Apply the transformation to the video container
            videoContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };

        // Add the mousemove event listener to the document
        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup: Remove the event listener when the component is unmounted
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        // Hide horizontal scrollbar on mount
        document.body.style.overflowX = 'hidden';

        // Cleanup: Restore default overflow on unmount
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    return (
        <div className="flex justify-center min-h-screen relative overflow-hidden" id={"hero"}>
            <div
                ref={videoContainerRef}
                className="relative z-0"
                style={{
                    pointerEvents: 'none',
                    width: '100%',
                    height: '100%',
                }}
            >
                <video
                    src="/Neon Sign.mkv"
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    style={{ top: 0, left: 0 }}
                />
            </div>
        </div>
    );
};

export default Hero;