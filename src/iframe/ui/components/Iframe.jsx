import React, { Component } from 'react';
import classSet             from 'react-classset';

var Iframe = React.createClass({
    render() {
        var cs = classSet;
        //浅拷贝
        const { title, url, herf} = this.props;
        //深拷贝分配一个新地址给newObj
        const herfurl = herf;

        const bodyClasses = title ? 'widget__body widget__iframe' : 'full_height';
        const body = (
            <div className={bodyClasses}>
                <iframe src={url} width="100%" height="100%" scrolling="0"></iframe>
            </div>
        );

        if (title) {
            return (
                <div className="full_height">
                    <div className="widget__header">
                        {title}
                        <a href={herfurl} target="_blank">
                            <i className="fa fa-external-link-square" />
                        </a>
                    </div>
                    {body}
                </div>
            );
        } else {
            return body;
        }
    }
});

export default Iframe;
