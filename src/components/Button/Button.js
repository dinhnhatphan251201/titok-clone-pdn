import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

//to: link noi bo, href: link ben ngoai
const Button = ({
    to,
    href,
    disable = false,
    primary = false,
    outline = false,
    text = false,
    small = false,
    medium = false,
    large = false,
    rounded = false,
    leftIcon = false,
    rightIcon = false,
    children,
    className,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // if (disable) {
    //     delete props.onClick;
    // }

    //khi disable thi se delete tat ca event len tren btn
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', { [className]: className, disable, primary, outline, text, small, large, rounded });

    return (
        <Comp className={classes} {...props} {...passProps}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    disable: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
    rounded: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
