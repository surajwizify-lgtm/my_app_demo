export default function HospitalsPage() {
    return (<div style={{ maxWidth: '390px', margin: '0 auto', position: 'relative', minHeight: '100vh' }}>
        <iframe
            src="/hospitalist.html"
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

    </div>)
}
