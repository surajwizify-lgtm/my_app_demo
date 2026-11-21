import BottomNav from '@/components/common/BottomNav'

export default function HomePage() {
    return (
        <div style={{ maxWidth: '390px', margin: '0 auto', position: 'relative', minHeight: '100vh' }}>
            <iframe
                src="/health_home.html"
                style={{
                    width: '100%',
                    height: '100vh',
                    border: 'none',
                    display: 'block',
                    paddingBottom: '0px',
                }}
                title="Health App Home"
            />
            {/* <BottomNav /> */}
        </div>
    )
}