import React from 'react';
import classNames from 'classnames';
import styles from './FamilyNode.module.css';

export default ({ node, isRoot, onSubClick, style }) => (
    <div className={styles.root} style={style}>
        <div
            className={classNames(
                styles.inner,
                styles[node.gender],
                isRoot && styles.isRoot
            )}
        > {node.name}
    </div>
        {node.hasSubTree && (
            <div
                className={classNames(styles.sub, styles[node.gender])}
                onClick={() => onSubClick(node.id)}
            />
        )}
    </div>
);
