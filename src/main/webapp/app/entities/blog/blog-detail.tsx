import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './blog.reducer';

export const BlogDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const blogEntity = useAppSelector(state => state.blog.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="blogDetailsHeading">Blog</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{blogEntity.id}</dd>
          <dt>
            <span id="title">Title</span>
          </dt>
          <dd>{blogEntity.title}</dd>
          <dt>
            <span id="content">Content</span>
          </dt>
          <dd>{blogEntity.content}</dd>
          <dt>
            <span id="publishDate">Publish Date</span>
          </dt>
          <dd>
            {blogEntity.publishDate ? <TextFormat value={blogEntity.publishDate} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="viewCount">View Count</span>
          </dt>
          <dd>{blogEntity.viewCount}</dd>
          <dt>Author</dt>
          <dd>{blogEntity.author ? blogEntity.author.name : ''}</dd>
        </dl>
        <Button tag={Link} to="/blog" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/blog/${blogEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BlogDetail;
