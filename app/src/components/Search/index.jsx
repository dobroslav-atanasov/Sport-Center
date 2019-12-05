import React from 'react';

class Search extends React.Component {
    searchEvents = (event) => {
        event.preventDefault();
        const { events } = this.state;
        const creatorId = authService.getUserInfo().id;
        const search = event.target.value.toLowerCase();
        if (search === '') {
            eventService.getAllEvents()
                .then(events => {
                    const filterEvents = events.filter(x => x.creatorId === creatorId);
                    this.setState({ events: filterEvents });
                });
        } else {
            const result = events.filter(x => x.name.toLowerCase().includes(search));
            this.setState({ events: result });
        }
    };

    render() {
        return (
            <div className="row" style={{ marginBottom: 20, marginTop: 30 }}>
                <div className="col-md-4 offset-md-4">
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i class="fa fa-search"></i></span>
                        </div>
                        <input className="form-control mr-sm-2" type="search" name="search" onChange={this.searchEvents} placeholder="Search Event" />
                    </div>
                </div>
            </div>
        );
    };
};

export default Search;