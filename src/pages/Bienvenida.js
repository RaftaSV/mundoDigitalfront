
<Layout>
      <Title htmlTag="h1" size={70}>
        ¡Bienvenido a Mundo Digital!
      </Title>
      <p>Una aplicación para organizar tu vida de manera sencilla.</p>
      <br />
      <div className="container-btn" style={{ textAlign: 'center' }}>
        <Button onClick={refresh}>
          <RefreshIcon></RefreshIcon>
        </Button>
      </div>
      <br />
      {loading ? (
        <p style={{ textAlign: 'center' }}>
          <b>Cargando...</b>
        </p>
      ) : (
        <Row>
          {data?.docs.map(({ id, trademarkName, image }) => (
            <Col key={id} xs={12} md={6} lg={4}>
              <CardTradeMark
                name={trademarkName}
                image={image.secure_url}
                onClick={() => {
                  navigate(`/Login/filter?trademarkId=${id}&name=${trademarkName}`);
                }}
              />
            </Col>
          ))}
        </Row>
      )}
      <div className="container-btn" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <StyledPagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          onChange={(e, page) => {
            setPage(page);
          }}
        />
      </div>
      <br />
    </Layout>