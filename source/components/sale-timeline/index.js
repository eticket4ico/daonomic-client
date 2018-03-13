// @flow
import * as React from 'react';
import cn from 'classnames';
import Badge from '@daonomic/ui/source/badge';
import Panel from '@daonomic/ui/source/panel';
import { saleTimeline } from '~/config';
import type { TimelineStep } from '~/types/sale-timeline';
import styles from './sale-timeline.css';

export default class SaleTimeline extends React.Component<{}> {
  renderSteps = (timeline: TimelineStep[]) =>
    timeline.map(({ date, text, percent, isActive }) => (
      <li
        key={date}
        className={cn(styles.item, {
          [styles.item_active]: isActive,
        })}
      >
        <div className={styles.row}>
          {date}

          {isActive ? <span className={styles.now}> Now</span> : null}
        </div>
        <div className={styles.row}>
          {text}{' '}
          <Badge
            className={cn({
              [styles.badge_inactive]: !isActive,
            })}
          >
            {percent}
          </Badge>
        </div>
      </li>
    ));

  render() {
    if (saleTimeline.length === 0) {
      return null;
    }

    return saleTimeline.map(({ title, steps }) => (
      <Panel key={title} className={styles.root}>
        <h3 className={styles.title}>{title}</h3>

        <ul className={styles.timeline}>{this.renderSteps(steps)}</ul>
      </Panel>
    ));
  }
}
