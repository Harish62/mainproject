(function($){
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
    
        var calendar = new FullCalendar.Calendar(calendarEl, {
    
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'listDay,listWeek'
          },
    
          // customize the button names,
          // otherwise they'd all just say "list"
          views: {
            listDay: { buttonText: 'list day' },
            listWeek: { buttonText: 'list week' }
          },
    
          initialView: 'listWeek',
          initialDate: '2023-01-12',
          navLinks: true, // can click day/week names to navigate views
          editable: true,
          dayMaxEvents: true, // allow "more" link when too many events
          events: [
            {
              title: 'All Day Event',
              start: '2023-01-01'
            },
            {
              title: 'Long Event',
              start: '2023-01-07',
              end: '2023-01-10'
            },
            {
              groupId: 999,
              title: 'Repeating Event',
              start: '2023-01-09T16:00:00'
            },
            {
              groupId: 999,
              title: 'Repeating Event',
              start: '2023-01-16T16:00:00'
            },
            {
              title: 'Conference',
              start: '2023-01-11',
              end: '2023-01-13'
            },
            {
              title: 'Meeting',
              start: '2023-01-12T10:30:00',
              end: '2023-01-12T12:30:00'
            },
            {
              title: 'Lunch',
              start: '2023-01-12T12:00:00'
            },
            {
              title: 'Meeting',
              start: '2023-01-12T14:30:00'
            },
            {
              title: 'Happy Hour',
              start: '2023-01-12T17:30:00'
            },
            {
              title: 'Dinner',
              start: '2023-01-12T20:00:00'
            },
            {
              title: 'Birthday Party',
              start: '2023-01-13T07:00:00'
            },
            {
              title: 'Click for Google',
              url: 'http://google.com/',
              start: '2023-01-28'
            }
          ]
        });
    
        calendar.render();
      });
      document.addEventListener('DOMContentLoaded', function() {
        var Calendar = FullCalendar.Calendar;
        var Draggable = FullCalendar.Draggable;
    
        var containerEl = document.getElementById('external-events');
        var calendarEl = document.getElementById('calendar1');
        var checkbox = document.getElementById('drop-remove');
    
        // initialize the external events
        // -----------------------------------------------------------------
    
        new Draggable(containerEl, {
          itemSelector: '.fc-event',
          eventData: function(eventEl) {
            return {
              title: eventEl.innerText
            };
          }
        });
    
        // initialize the calendar
        // -----------------------------------------------------------------
    
        var calendar = new Calendar(calendarEl, {
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
          editable: true,
          droppable: true, // this allows things to be dropped onto the calendar
          drop: function(info) {
            // is the "remove after drop" checkbox checked?
            if (checkbox.checked) {
              // if so, remove the element from the "Draggable Events" list
              info.draggedEl.parentNode.removeChild(info.draggedEl);
            }
          }
        });
    
        calendar.render();
      });
      document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar2');
    
        var calendar = new FullCalendar.Calendar(calendarEl, {
          selectable: true,
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
          dateClick: function(info) {
            alert('clicked ' + info.dateStr);
          },
          select: function(info) {
            alert('selected ' + info.startStr + ' to ' + info.endStr);
          }
        });
    
        calendar.render();
      });

  })(jQuery);